// function bubbleSort(arr){
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length-i-1; j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//         console.log(arr);
//     }
// }
// var arr=[44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// bubbleSort(arr);


function bubbleSort3(arr3) {
    var low = 0;
    var high= arr.length-1; //设置变量的初始值
    var tmp,j;
    while (low < high) {
        for (j= low; j< high; j++){ //正向冒泡,找到最大者
            if (arr[j]> arr[j+1]) {
                tmp = arr[j]; 
                arr[j]=arr[j+1];
                arr[j+1]=tmp;
            }
        }
        high--;                 //修改high值, 前移一位
        for (j=high; j>low; j--){ //反向冒泡,找到最小者
            if (arr[j]<arr[j-1]){
                tmp=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=tmp;
            }
        }
        low++;
        console.log(arr);
    }
}
var arr=[44,38,5,47,15,36,26,27,2,46,4,19,50,48];
bubbleSort3(arr);


function twoSum(arr, sum){
    let map={};
    for(let i=0; i<arr.length; i++){
        map[arr[i]]=i;
    }
    for(let j=0; j<arr.length; j++){
        let num=sum-arr[j];
        if(map.hasOwnProperty(num)&&j!==map[num]*1){
            return[j, map[num]];
        }
    }
}

//map用来记录 和为目标值的另一个数值（key: 数值，value: 下标） 
function twoSum2(arr, sum){
    let map=new Map();
    for(let i=0; i<arr.length; i++){
        if(map.has(arr[i])){
            return [map.get(arr[i]), i];
        }
        map.set(sum-arr[i], i);
    }
}
