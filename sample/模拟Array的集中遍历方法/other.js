// 实现map
Array.prototype.mapFun = function (fn, context) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        let result = fn.call(context, this[i], i, this);
        newArray.push(result);
    }
    return newArray;
}
let arr1 = [1, 2, 3, 4, 5];
arr1.mapFun((item, index, array) => {
    return item * 3;
})

// 实现filter
Array.prototype.filterFun = function (fn, context) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        let result = fn.call(context, this[i], i, this);
        if (result) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}
let arr2 = [1, 2, 3, 4, 5];
arr2.filterFun((item, index, array) => {
    return item > 3;
})

// 实现every
Array.prototype.everyFun = function (fn, context) {
    for (let i = 0; i < this.length; i++) {
        let result = fn.call(context, this[i], i, this);
        if (!result) {
            return false;
        }
    }
    return true;
}
let arr3 = [1, 2, 3, 4, 5];
arr3.everyFun((item, index, array) => {
    return item > 3;
})

// 实现 some
Array.prototype.someFun = function (fn, context) {
    for (let i = 0; i < this.length; i++) {
        let result = fn.call(context, this[i], i, this);
        if (result) {
            return true;
        }
    }
    return false;
}
let arr4 = [1, 2, 3, 4, 5];
arr4.someFun((item, index, array) => {
    return item > 3;
})

// 实现 forEach
Array.prototype.forEachFun = function (fn, context) {
    for (let i = 0; i < this.length; i++) {
        fn.call(context, this[i], i, this);
    }
}
let arr5 = [1, 2, 3, 4, 5];
let arr6 = [];
arr5.forEachFun((item, index, array) => {
    item = {
        index: item
    }
    arr6.push(item)
})