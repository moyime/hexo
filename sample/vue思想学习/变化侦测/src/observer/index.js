import Dep from "./dep";

class Observer {
    constructor(value) {
        this.value = value;
        def(value, '__ob__', this)
        if (Array.isArray(value)) {

        } else {
            this.walk(value);
        }
    }
    walk(obj) {
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i]);
        }
    }
}
/**
 * 使一个对象转化成可观测对象
 * @param { Object } obj 对象
 * @param { String } key 对象的key
 * @param { Any } val 对象的某个key的值
 */
function defineReactive(obj, key, val) {
    if (arguments.length === 2) {
        val = obj[key];
    }
    //递归子属性
    if (typeof val === 'object') {
        new Observer(val);
    }
    const dep = new Dep(); //实例化一个依赖管理器，生成一个依赖管理数组dep
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            console.log(`${key}属性被读取了`);
            dep.depend(); // 在getter中收集依赖
            return val;
        },
        set(newVal) {
            if (val === newVal) {
                return;
            }
            console.log(`${key}属性被修改了`);
            val = newVal;
            dep.notify(); // 在setter中通知依赖更新
        }
    })
}