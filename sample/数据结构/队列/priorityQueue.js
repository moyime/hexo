function PriorityQueue() {
    let items = [];
    let QueueItem = function (element, priority) {
        this.element = element;
        this.priority = priority;
    }
    this.enqueue = function (element, priority) {
        let queueItem = new QueueItem(element, priority);
        let added = false;
        for (let i = 0; i < items.length; i++) {
            if (queueItem.priority > items[i].priority) {
                items.splice(i, 0, queueItem);
                added = true;
                break;
            }
        }
        if (!added) {
            items.push(queueItem);
        }
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