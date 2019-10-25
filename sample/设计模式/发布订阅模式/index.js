const Event = function () {
    this.event = [];
}
Event.prototype.on = function (eventType, fn) {
    if (!this.event[eventType]) {
        this.event[eventType] = [];
    }
    return this.event[eventType].push(fn);
}
Event.prototype.emit = function () {
    let eventType = Array.prototype.shift.call(arguments);
    for (let item of this.event[eventType]) {
        item.apply(item, arguments);
    }
}

let instance = new Event();
let obj = {
    name: "文"
}
instance.on("click", function () {
    console.log("click1")
    console.log(this.name)
}.bind(obj))
instance.on("click", function (a) {
    console.log("click2", a)
})
instance.emit("click", 1)