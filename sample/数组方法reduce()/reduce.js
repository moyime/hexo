//reduce语法： arr.reduce(callback, [initialValue])
/*callback （执行数组中每个值的函数，包含四个参数）

    1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
    2、currentValue （数组中当前被处理的元素）
    3、index （当前元素在数组中的索引）
    4、array （调用 reduce 的数组）

initialValue （作为第一次调用 callback 的第一个参数。）
*/
// 1、计算数组中每个元素出现的次数
function countNum(arr) {
    let obj = arr.reduce((prev, cur) => {
        if (cur in prev) {
            prev[cur]++;
        } else {
            prev[cur] = 1;
        }
        return prev;
    }, {});
    return obj;
}
countNum(['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}

// 2、数组去重
function deduplication(arr) {
    let array = arr.reduce((prev, cur) => {
        if (!prev.includes(cur)) {
            prev.push(cur);
        }
        return prev;
    }, []);
    return array;
}
deduplication([1, 2, 3, 4, 4, 1]); //[1, 2, 3, 4]

// 3、将二维数组转化为一维
function fun(arr) {
    let array = arr.reduce((prev, cur) => {
        return prev.concat(cur);
    }, [])
    return array;
}
let a = [
    [0, 1],
    [2, 3],
    [4, 5]
];
fun(a);

// 4、将多维数组转化为一维
function newArr(arr) {
    return arr.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? newArr(cur) : cur);
    }, [])
}
let arr = [
    [0, 1],
    [2, 3],
    [4, [5, 6, 7]]
];
newArr(arr);

// 5、对象里的属性求和
let result = [{
        subject: 'math',
        score: 10
    },
    {
        subject: 'chinese',
        score: 20
    },
    {
        subject: 'english',
        score: 30
    }
];

function total(arr, key) {
    return arr.reduce((prev, cur) => {
        return prev + cur[key];
    }, 0)
}
total(result, "score");