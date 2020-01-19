function Queue() {
    let items = [];
    // 入队
    this.enqueue = function (element) {
        items.push(element);
    }
    //出队
    this.dequeue = function () {
        return items.shift();
    }
    //查看队列头
    this.front = function () {
        return items[0];
    }
    // 查看队列是否为空
    this.isEmpty = function () {
        return items.length === 0;
    }
    //队列大小
    this.size = function () {
        return items.length;
    }
    //清除队列
    this.clear = function () {
        items = [];
    }
    this.getItems = function () {
        return items;
    }
}

function fun(arr, number) {
    let queue = new Queue();
    for (let item of arr) {
        queue.enqueue(item);
    }
    while (queue.size() > 1) {
        let n = number;
        while (n > 1) {
            let ele = queue.dequeue();
            queue.enqueue(ele);
            n--;
        }
        // console.log(queue.dequeue());
    }
    return queue.dequeue();
}
let arr = ["1", "2", "3", "4", "5", "6", "7", "8"];
let number = 3;
fun(arr, number);