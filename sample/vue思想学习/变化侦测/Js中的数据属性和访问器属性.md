在js中，对象的属性分为：数据属性和访问器属性
### 数据属性
1、configurable: 表示能否通过delete删除属性，能否修改属性的特性，能否把属性改为访问器属性，默认为true；(设置为false后，后面就不能再对这个属性的4个特性进行修改了，修改了便会报错)

2、enumerable: 表示能否通过for-in循环返回属性，默认为true；

3、writable: 表示能否修改属性的值，默认为true；

4、value: 包含该属性的数据值，默认为undefined;

### 访问器属性
1、configurable：表示能否通过delete删除属性，能否修改属性的特性，能否把属性修改为访问器属性，默认为false(configurable这个特性，因为访问器属性里面默认值为false，如果程序后面需要对该属性进行delete操作等，那就在定义访问器属性时，将这个特性设置为true，不然这个会导致后面一些报错的问题)；

 2、enumerable:表示能否通过for-in循环返回属性,默认为false；

 3、get：在读取属性时调用的函数,默认值为undefined；

 4、set：在写入属性时调用的函数,默认值为undefined；

 ### proxy
 ```
    let person = {
        name: "moyi",
        year: 24
    }
    let newPerson = new Proxy(person, {
        get(target, property) {
            console.log("get: ", target, property)
        },
        set(target, property, value) {
            console.log("set: ", target, property, value);
        },
        deleteProperty(target, property) {
            console.log("delete: ", target, property);
        },
        has(target, property) {
            console.log("has: ", target, property);
        }
    })
    console.log(newPerson.name);
    console.log(newPerson.name = "moyime");
    console.log(name in newPerson);
    console.log(delete newPerson.name);
 ```

