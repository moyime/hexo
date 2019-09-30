/**第一版 */
// Function.prototype.call1=function(obj){
//     obj.fn=this;
//     obj.fn();
//     delete obj.fn;
// }
// function fun(){
//     console.log(this.name);
// }
// let obj={
//     name: "moyime"
// }
// fun.call1(obj);

/**第二版 */
// Function.prototype.call1=function(obj){
//     obj.fn=this;   
//     let args=[];
//     for(let i=1; i<arguments.length; i++){
//         args.push('arguments[' + i + ']');
//     }
//     console.log(args);
//     eval('obj.fn(' + args +')');
//     delete obj.fn;
// }
// function fun(greet, year){
//     console.log("***:  ", greet, this.name, year);
// }
// let obj={
//     name: "moyime"
// }
// fun.call1(obj, "hello", 12);



/**第三版 */
Function.prototype.call1=function(obj){
    console.log(obj);
    obj=obj||window;
    obj.fn=this;
    let args=[];
    for(let i=1; i<arguments.length; i++){
        args.push('arguments[' + i + ']');
    }
    var result=eval('obj.fn(' + args +')');
    delete obj.fn;
    return result;
}
function fun(greet, year){
    return{
        name: this.name,
        greet: greet,
        year: year
    }
    // console.log("***:  ", greet, this.name, year);
}
var obj={
    name: "moyime"
}
var name="window";
console.log(fun.call1(null, "hello", 12));
