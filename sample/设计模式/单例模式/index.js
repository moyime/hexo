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
console.log(obj1, obj2, obj1 === obj2);