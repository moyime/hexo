// 第一版
function deepCopy1(data) {
    if (data === null) {
        return data;
    }
    if (typeof data === "object") {
        let obj = {};
        for (let key in data) {
            obj[key] = deepCopy1(data[key]);
        }
        return obj;
    } else {
        return data;
    }
}

const target1 = {
    field1: 1,
    field2: undefined,
    field3: 'ConardLi',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    }
};

console.log(deepCopy1(target1));


//第二版  考虑数组
function deepCopy2(data) {
    if (data === null) {
        return data;
    }
    if (typeof data === "object") {
        let temp = Array.isArray(data) ? [] : {};
        for (let key in data) {
            temp[key] = deepCopy2(data[key]);
        }
        return temp;
        // let temp;
        // if (Array.isArray(data)) {
        //     temp = [];
        //     for (let i = 0; i < data.length; i++) {
        //         temp.push(deepCopy2(data[i]));
        //     }
        // } else {
        //     temp = {};
        //     for (let key in data) {
        //         temp[key] = deepCopy2(data[key]);
        //     }
        // }
        // return temp;
    } else {
        return data;
    }
}

const target2 = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [{
        a: 9,
        b: {
            c: 0
        }
    }, 4, 8]
};
console.log(deepCopy2(target2));

// 第三版 循环引用
// WeakMap弱引用 垃圾回收机制会自动回收
function deepCopy3(data, map = new WeakMap()) {
    if (data === null) {
        return null;
    }
    if (typeof data === "object") {
        let temp = Array.isArray(data) ? [] : {};
        if (map.get(data)) {
            return map.get(data);
        }
        map.set(data, temp);
        for (let key in data) {
            temp[key] = deepCopy3(data[key], map);
        }
        return temp;
    } else {
        return data;
    }
}
const target3 = {
    field1: 1,
};
target3.field2 = target3;
deepCopy3(target3);


//模拟遍历提高性能
function forEach(array, callback) {
    let index = 0;
    let length = array.length;
    while (index < length) {
        callback(array[index], index);
        index++;
    }
}

function deepCopy4(data, map = new WeakMap()) {
    if (data === null) {
        return null;
    }
    if (typeof data === "object") {
        let isArray = Array.isArray(data);
        let copyObj = isArray ? [] : {};
        if (map.get(data)) {
            return map.get(data);
        }
        map.set(data, copyObj);

        let keys = isArray ? undefined : Object.keys(data);
        forEach(keys || data, (value, key) => {
            if (keys) {
                key = value;
            }
            copyObj[key] = deepCopy4(data[key], map);
        })
        return copyObj;
    } else {
        return data;
    }
}
const target4 = {
    field1: 1,
};
target4.field2 = target4;
deepCopy4(target4);