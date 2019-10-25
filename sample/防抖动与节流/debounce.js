/*防抖动：触发事件，在事件触发后n秒内没有再触发该事件才执行。
如果在一个事件触发的n秒内 又触发了该事件  就会以新的时间为准
*/
var count = 1;
var container = document.getElementById("container");

function getUserAction(e) {
    // console.log(this, e);
    container.innerHTML = count++;
    return count;
}
// 第一版
function debounce1(func, wait) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait)
    }
}
// 第二版 保证this指向正确、event对象
function debounce2_1(fn, wait) {
    let timer;
    return function () {
        clearTimeout(timer);
        let that = this;
        timer = setTimeout(fn.bind(that, ...arguments), wait);
    }
}

function debounce2_2(fn, wait) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(arguments);
        }, wait);
    }
}

function debounce2_3(fn, wait) {
    let timer;
    return function () {
        clearTimeout(timer);
        let that = this;
        let args = arguments;
        timer = setTimeout(function () {
            fn.apply(that, args);
        }, wait);
    }
}
// 第三版 是否立即执行
function debounce3(fn, wait, immediate) {
    let timer;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        let that = this;
        let args = arguments;
        if (immediate) {
            if (!timer) {
                fn.apply(that, args);
            }
            timer = setTimeout(function () {
                clearTimeout(timer);
                timer = null;
            }, wait)
        } else {
            timer = setTimeout(function () {
                fn.apply(that, args);
            }, wait)
        }
    }
}

function debounce3_2(fn, wait, immediate) {
    let timer;
    let flag = true; //设置标志 是否执行回调函数
    return function () {
        let that = this;
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        if (immediate) {
            if (flag) {
                fn.apply(that, args);
                flag = false;
            }
            timer = setTimeout(function () {
                flag = true;
            }, wait)
        } else {
            timer = setTimeout(function () {
                fn.apply(that, args)
            }, wait)
        }
    }
}

// 第四版 返回值
function debounce(fn, wait, immediate) {
    let timer;
    let flag = true; //设置标志 是否执行回调函数
    return function () {
        let that = this;
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        if (immediate) {
            if (flag) {
                flag = false;
                return fn.apply(that, args);
            }
            timer = setTimeout(function () {
                flag = true;
            }, wait)
        } else {
            timer = setTimeout(function () {
                return fn.apply(that, args)
            }, wait)
        }
    }
}
// 第五版 取消防抖动
function debounce(fn, wait, immediate) {
    let timer;
    let flag = true;
    let debounced = function () {
        let that = this;
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        if (immediate) {
            if (flag) {
                flag = false;
                return fn.apply(that, args);
            }
            timer = setTimeout(function () {
                flag = true;
            }, wait)
        } else {
            timer = setTimeout(function () {
                fn.apply(that, args);
            }, wait)
        }
    }
    debounced.cancel = function () {

    }
    return debounced;
}
let setUserAction = debounce(getUserAction, 1000, true)
container.onmousemove = setUserAction;
// container.onmousemove = getUserAction;