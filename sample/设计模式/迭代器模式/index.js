// 内部迭代器
function each(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback.call(this, arr[i], i, arr)
    }
}
each([1, 2, 3], function (value, index, arr) {
    console.log(value, index, arr);
});


// 外部迭代器
const iterator = function (arr) {
    let current = 0;

    function value() {
        return arr[current];
    }

    function next() {
        current++;
    }

    function done() {
        return current >= arr.length;
    }
    return {
        next,
        value,
        done
    }
}
let arr2 = [1, 2, 3];
let iterator2 = iterator(arr2);