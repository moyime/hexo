// 定义Promise构造函数
function Promise(exector) {
    let self = this;
    this.value = undefined;
    this.reason = undefined;
    // 定义Promise的状态
    this.status = 'pending'
    // 存储then中成功的回调函数
    this.onResolvedCallbacks = [];
    // 存储then中失败的回调函数
    this.onRejectedCallbacks = [];

    function resolve(value) {
        if (self.status === 'pending') {
            self.value = value
            self.status = 'resolved'
            self.onResolvedCallbacks.forEach(fn => fn())
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.reason = reason
            self.status = 'rejected'
            self.onRejectedCallbacks.forEach(fn => fn())
        }
    }
    // 异常处理
    try {
        exector(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

// 在Promise原型上定义then方法，参数为成功和失败的回调
Promise.prototype.then = function (onFulfilled, onRejected) {
    let self = this;
    if (this.status === 'resolved') {
        onFulfilled(self.value)
    }
    if (this.status === 'rejected') {
        onRejected(self.reason);
    }
    if (this.status === 'pending') {
        this.onResolvedCallbacks.push(() => {
            onFulfilled(self.value)
        })

        this.onRejectedCallbacks.push(() => {
            onRejected(self.reason)
        })
    }
}

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 1000)
})

promise.then(data => {
    console.log(data)
}, err => {
    console.log(err)
})