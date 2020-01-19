


### 用法
类相当于实例的原型
```
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
let b=new Point();
typeof Point // "function"
Point === Point.prototype.constructor // true
b.constructor ===Point.prototype.constructor // true
```

### 静态方法
如果在一个方法前，加上**static**关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法


注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。

父类的静态方法，可以被子类继承。

静态方法也是可以从super对象上调用的

### 静态属性
```
// 老写法
class Foo {
    // ...
}
Foo.prop = 1;

// 新写法
class Foo {
    static prop = 1;
}
```

### 实例属性的新写法
```
class foo {
    bar = 'hello'; //实例属性
    baz = 'world'; //实例属性

    constructor() {
        // ...
    }
}
```

### 私有属性与私有方法新提案
```
class Foo {
    #a;
    #b;
    constructor(a, b) {
        this.#a = a;
        this.#b = b;
    }
    #sum() {
        return #a + #b;
    }
    printSum() {
        console.log(this.#sum());
    }
}
```

### new.target 属性 
该属性一般用在构造函数之中，返回new命令作用于的那个构造函数


### Object.getPrototypeOf
该方法可以用来从子类上获取父类，可以使用这个方法判断，一个类是否继承了另一个类。

### super关键字
两种用法： 函数、对象
* 函数： super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。
```
class A {}

class B extends A {
    constructor() {
        super();  //相当于A.prototype.constructor.call(this)
    }
}
```
作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错
* 对象：super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。


注意，使用super的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错。