function promise() {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve("hello world"), 1000);
    })
}
async function test() {
    let res = await promise();
    console.log(res);
}
// promise().then((value) => {
//     console.log(value);
// })


class Point {
    //构造方法
    constructor() {
        // ...
    }

    toString() {
        // ...
    }

    toValue() {
        // ...
    }
}

// 等同于
Point.prototype = {
    constructor() {},
    toString() {},
    toValue() {},
};

let b = new Point();
typeof Point // "function"
Point === Point.prototype.constructor // true
b.constructor === Point.prototype.constructor // true


class foo {
    bar = 'hello'; //实例属性
    baz = 'world'; //实例属性

    constructor() {
        // ...
    }
}

// 老写法
class Foo {
    // ...
}
Foo.prop = 1;

// 新写法
class Foo {
    static prop = 1;
}