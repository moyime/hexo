## 迭代器模式

### 定义
迭代器模式是指提供一种方法顺序访问一个聚合对象中各个元素, 而又无须暴露该对象的内部表示。
迭代器模式可以把迭代的过程从业务逻辑中分离出来，在使用迭代器模式之后，即使不关心对象的内部构造，也可以按顺序访问其中的每个元素。
### 作用
遍历一个聚合对象

### 举例
数组遍历方法比如Array.prototype.forEach、jQuery中的$.each()等等都是迭代器

### 内部迭代器
```
function each(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback.call(this, arr[i], i, arr)
    }
}
each([1, 2, 3], function (value, index, arr) {
    console.log(value, index, arr);
});

```
### 外部迭代器
```
// 使用了闭包
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
iterator2.value(); //1
iterator2.next();  
iterator2.value();  //2
```

