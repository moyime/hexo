function Stack() {
    let items = [];
    this.push = function (element) {
        items.push(element);
    }
    this.pop = function () {
        return items.pop();
    }
    this.peek = function () {
        return items[items.length - 1];
    }
    this.size = function () {
        return items.length;
    }
    this.isEmpty = function () {
        return items.length === 0;
    }
    this.clear = function () {
        items = [];
    }
    this.getItems = function () {
        return items;
    }
}

function aryTransform(number, n) {
    let stack = new Stack();
    let string = "";
    while (number > 0) {
        let remainder = number % n;
        stack.push(remainder);
        number = Math.floor(number / n);
    }
    while (!stack.isEmpty()) {
        string += stack.pop();
    }
    return string * 1;
}