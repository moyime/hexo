// 可继续遍历的数据类型
const mapTag = "[object Map]";
const setTag = "[object Set]";
const arrayTag = "[object Array]";
const objectTag = "[object Object]";
const argsTag = "[object Arguments]";


// 不可继续遍历的数据类型
const boolTag = "[object Boolean]";
const dateTag = "[object Date]";
const numberTag = "[object Number]";
const stringTag = "[object String]";
const symbolTag = "[object Symbol]";
const errorTag = "[object Error]";
const regexpTag = "[object RegExp]";
const funcTag = "[object Function]";

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];

//遍历方法
function forEach(array, callback) {
    let index = 0;
    let length = array.length;
    while (index < length) {
        callback(array[index], index);
        index++;
    }
    return array;
}

// 判断是不是对象
function isObject(target) {
    let type = typeof target;
    return target !== null && (type === "object" || type === "function");
}

//获取数据类型
function getType(target) {
    return Object.prototype.toString.call(target);
}

// 对象初始化
function getInit(target) {
    let constructorFun = target.constructor;
    return new constructorFun();
}

// 克隆symbol类型
function cloneSymbol(target) {
    return Object(Symbol.prototype.valueOf.call(target));
}

// 克隆 正则
function cloneReg(target) {
    let reg = /\w*$/;
    let targetReg = new target.constructor(target.source, reg.exec(target));
    targetReg.lastIndex = target.lastIndex;
    return targetReg;
}

// 克隆函数
function cloneFunction(func) {
    const reg = /(function\s?)([^\.])([\w|,|\s|-|_|\$]*)(.+?\{)([^\.][\s|\S]*(?=\}))/;
    const funcString = func.toString();
    if (func.prototype) {
        //普通函数
        const result = reg.exec(funcString);
        const param = result[3];
        const body = result[5];
        if (body) {
            if (param) {
                const paramArr = param.split(",");
                return new Function(...paramArr, body);
            } else {
                return new Function(body);
            }
        } else {
            return null;
        }
    } else {
        return eval(funcString);
    }
}

function cloneOtherType(target, type) {
    let Ctor = target.constructor;
    switch (type) {
        case boolTag:
        case numberTag:
        case stringTag:
        case errorTag:
        case dateTag:
            return new Ctor(target);
        case symbolTag:
            return cloneSymbol(target);
        case regexpTag:
            return cloneReg(target);
        case funcTag:
            return cloneFunction(target);
        default:
            return null;
    }
}

function clone(target, map = new WeakMap()) {
    //原始数据类型
    if (!isObject(target)) {
        return target;
    }

    const type = getType(target);
    let cloneTarget;
    if (deepTag.includes(type)) {
        cloneTarget = getInit(target);
    } else {
        return cloneOtherType(target, type);
    }

    if (map.get(target)) {
        return map.get(target);
    }
    map.set(target, cloneTarget);
    switch (type) {
        case setTag: //set类型
            target.forEach(value => {
                cloneTarget.add(clone(value, map));
            })
            break;
        case mapTag: //map类型
            target.forEach((value, key) => {
                cloneTarget.set(key, clone(value, map));
            })
            break;
        default: //数组、类数组、普通对象
            let isArray = Array.isArray(target);
            let array = isArray ? target : Object.keys(target);
            forEach(array, (value, key) => {
                if (!isArray) {
                    key = value;
                }
                cloneTarget[key] = clone(target[key], map);
            })
            break;
    }
    return cloneTarget
}


const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    empty: null,
    map: new Map([
        ['name', '张三'],
        ['title', 'Author']
    ]),
    set: new Set([1, 2, 3]),
    bool: new Boolean(true),
    num: new Number(2),
    str: new String("2"),
    symbol: Symbol("hello world"),
    symbolObj: Object(Symbol(1)), // "[object symbol]"
    date: new Date(),
    reg: /\d+/,
    error: new Error(),
    func1: () => {
        console.log('code秘密花园');
    },
    func2: function (a, b) {
        return a + b;
    }
};
let cloneValue = clone(target);