// for(var i=0; i<5; i++){
//    setTimeout(function(){
//         console.log(new Date(), i);
//    },1000)
// }
// console.log(new Date(), i);



// function fun(index){
//     setTimeout(function(){
//         console.log(new Date(), index);
//     },1000)
// }
// for(var i=0; i<5; i++){
//     fun(i);
// }
// console.log(new Date(), i);



// for(var i=0; i<5; i++){
//     (function(i){
//         setTimeout(function(){
//             console.log(i);
//         },1000)
//     })(i);
// }



// for (var i = 0; i < 5; i++) {
//     setTimeout(function(j,k) {
//         console.log(new Date, j, k);
//     }, 1000, i, 99);
// }

// console.log(new Date, i);




// for (var i = 0; i < 5; i++) {
//     let that=this;
//     setTimeout(function(index) {
//         console.log(new Date, index);
//     }.bind(that,i), 1000);
// }

// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(new Date, i);
//     }, 1000);
// }
// console.log(new Date, i);


// const sleep = (timeountMS) => new Promise((resolve) => {
//     setTimeout(resolve, timeountMS);
// });

// (async () => {  // 声明即执行的 async 函数表达式
//     for (var i = 0; i < 5; i++) {
//         if (i > 0) {
//             await sleep(1000);
//         }
//         console.log(new Date, i);
//     }

//     await sleep(1000);
//     console.log(new Date, i);
// })();


function sleep(time){
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}
async function fun(){
    for(var i=0; i<5; i++){
        if(i>0){
            await sleep(1000);
        }
        console.log(new Date, i);
    }
    await sleep(1000);
    console.log(new Date, i);
}

fun();




function a(){
    var n=999;
    function b(){
        n++;
        console.log(n);
    }
    return b;
}
var c=a();
c();  //1000 
c();  //1001
c();  //1002
var d=a();
d();  //1000 
d();  //1001
d();  //1002


var name = "The Window";   
var object = {
    name : "My Object",   
　　getNameFunc : function(){  
        let that=this; 
　　　　 return function(){   
　　　　　　return that.name;   
　　　   };   
　　}   
};
console.log(object.getNameFunc()());  



var name = "The Window";   
var object = {
    name : "My Object",   
　　getNameFunc : function(){ 
        return ()=>{
            return this.name
        } 
　　}   
};
console.log(object.getNameFunc()());  