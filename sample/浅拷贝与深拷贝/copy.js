// var obj={
//     a: 1,
//     b: undefined,
//     c: null,
//     d: true,
//     e: "str",
//     f: function(a,b){
//         return a+b;
//     },
//     g: {
//         x: 99,
//         y:{
//             t: 10,
//             v:{
//                 u: 89
//             }
//         }
//     }
// }
let mySymbol = Symbol();
var obj={
    a: 1,
    b: "string",
    c: true,
    d: undefined,
    e: null,
    f:function(){},
    g:Symbol()
}
var str=JSON.stringify(obj);
var obj2=JSON.parse(str);
console.log(obj);
console.log(str);
console.log(obj2);

let arr=[1, true, null, "string", undefined, Symbol(), function(){}];
let str=JSON.stringify(arr);

let mySymbol = Symbol();
let obj={
    a: 1,
    mySymbol: "aaa"
}
let str=JSON.stringify(arr);


let mySymbol = Symbol();
let obj={
    a: 1,
}
obj[mySymbol]="aaa";
let str=JSON.stringify(obj);


let obj={
    a: 1,
    b: 3
}
Object.defineProperty(obj, "a",{
    enumerable: false
})
let str=JSON.stringify(obj);


let obj={
    a: NaN,
    b: Infinity,
    c: -Infinity,
}
let str=JSON.stringify(obj);  //"{"a":null,"b":null,"c":null}"


let err = new Error('出错了');
let obj={
    err: err
}
let str=JSON.stringify(obj);
