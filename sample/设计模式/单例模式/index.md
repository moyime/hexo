## 单例模式
### 单例模式的条件
* 确保只有一个实例
* 可以全局访问
### JavaScript 中的单例模式
因为javascript是没有类的语言，而且js中定义的全局对象符合单例模式两个条件；很多时候我们把全局对象当成单例模式来使用。
### 实现单例模式
```
const singleton = function (name) {
    this.name = name;
    this.instance = null;
}
singleton.prototype.getName = function () {
    return this.name
}

singleton.getInstance = function (name) {
    if (!this.instance) {
        this.instance = new singleton(name);
    }
    return this.instance;
}

let obj1 = singleton.getInstance("小敏");
let obj2 = singleton.getInstance("小勤");
console.log(obj1 === obj2);  //true
```