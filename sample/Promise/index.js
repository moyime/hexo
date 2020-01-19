class Promise {
    constructor(executor) {
        if (typeof executor !== "function") {
            throw new Error("Promise构造函数必须传一个函数作为参数");
        }
        this.state = "pending";
        this.chained = [];
        const resolve = (result) => {
            //一旦状态改变，就不会再变  从pending---->fulfilled
            if (this.state === "pending") {
                this.state = "fulfilled";
                this.value = result;
                for (let {
                        onFulfilled
                    } of this.chained) {
                    onFulfilled();
                }
            }
        }

        const reject = (error) => {
            //一旦状态改变，就不会再变  从pending---->rejected
            if (this.state === "pending") {
                this.state = "rejected";
                this.value = error;
                for (let {
                        onRejected
                    } of this.chained) {
                    onRejected();
                }
            }
        }
        // 异常处理
        try {
            exector(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    then(onFulfilled, onRejected) {
        if (this.state === "fulfilled") {
            onFulfilled(this.value);
        } else if (this.state === "rejected") {
            onRejected(this.value);
        } else {
            this.chained.push({
                onFulfilled,
                onRejected
            });
        }
    }
}