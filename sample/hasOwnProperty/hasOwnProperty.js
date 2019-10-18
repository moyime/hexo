/*
1、hasOwnProperty()函数 判断对象自身属性（会忽略掉那些从原型链上继承到的属性）中是否具有指定的属性(不区分是否可枚举)   返回一个Boolean值
2、propertyIsEnumerable():是hasOwnProperty()的增强版,在hasOwnProperty的基础上，它还需要该属性为可枚举属性
3、for...in语句以任意顺序遍历一个对象的除Symbol以外的可枚举属性。包括自身的属性与继承来的可枚举属性
4、Object.keys()可以用来获取对象自身可枚举的属性名
5、in：判断对象是否能访问到该属性（从自身与继承中寻找），不区分是否可枚举
6、Object.getOwnPropertyNames()返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组
*/
let obj = {
    name: "moyime",
    age: 23
}
console.log(obj.hasOwnProperty("name")); //true
Object.defineProperty(obj, "name", {
    enumerable: false
})
console.log("hasOwnProperty: ", obj.hasOwnProperty("name")); //true
console.log("propertyIsEnumerable: ", obj.propertyIsEnumerable("name")); //false

for (let key in obj) {
    console.log(key, obj[key]); // name为不可枚举属性 所以访问不到
}
console.log("in: ", "name" in obj); //true  不区分是否可枚举

console.log("Object.getOwnPropertyNames: ", Object.getOwnPropertyNames(obj)); //[ 'name', 'age' ]


let person = {
    sex: "man"
}
let p1 = Object.create(person, {

});


function Person() {
    this.type = "personType"
}

function Man(sex) {
    this.sex = sex;
    this.color = "yellow"
}
Man.prototype = new Person();
let man1 = new Man("woman");
console.log("sex" in man1);
console.log("type" in man1);


let obj = {
    name: "kiki",
    age: 25
}
Object.defineProperties(obj, {
    "sex": {
        value: "woman",
        enumerable: false
    }
})
Object.getOwnPropertyDescriptors(obj);
Object.keys(obj);
Object.getOwnPropertyNames(obj);
obj.hasOwnProperty("sex");
obj.propertyIsEnumerable("sex");