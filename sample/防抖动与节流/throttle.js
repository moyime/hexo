/** 节流
 * 持续的触发事件 也只会每隔一段时间 执行一次
 */
let count = 1;
let container = document.getElementById("container");

function getUserAction(e) {
    // console.log(this, e);
    container.innerHTML = count++;
    return count;
}
// 时间戳  第一次触发会立即执行
function throttle1(fn, wait) {
    let preTime = 0;
    return function () {
        let nowTime = +new Date();
        if (nowTime - preTime > wait) {
            fn.apply(this, arguments);
            preTime = nowTime;
        }
    }
}
// 定时器  在触发事件一段时间后执行
function throttle2(fn, wait) {
    let timer;
    return function () {
        let context = this;
        let agrs = arguments;
        if (!timer) {
            timer = setTimeout(function () {
                fn.apply(context, agrs);
                timer = null;
            }, wait)
        }
    }
}
// 有头有尾的 就是鼠标移入能立刻执行，停止触发的时候还能再执行一次
/**
 * 场景一： 第一次触发----立即执行
 * 场景一： 在某一次触发后（立即执行） 停顿了大于设置的等待时间 后再次触发（立即执行） 
 * 场景二:  连续触发事件  其中第一次触发（立即执行） 之后的触发会在  wait - (now - previous)  之后触发
 */
function throttle(fn, wait) {
    let previous = 0;
    let timer;
    return function () {
        let agrs = arguments;
        let context = this;
        let now = +new Date();
        let remaining = wait - (now - previous);
        if (remaining <= 0 || remaining > wait) {
            fn.apply(context, agrs);
            previous = now;
            if (timer) { //此时定时器等待的时间也达到了
                clearTimeout(timer);
                timer = null;
            }
        } else if (!timer) {
            timer = setTimeout(function () {
                fn.apply(context, agrs);
                timer = null;
                previous = now;
            }, remaining)
        }
    }
}
container.onmousemove = throttle(getUserAction, 2000);