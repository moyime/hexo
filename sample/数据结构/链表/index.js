class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    append(element) {
        let node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }
    insert(position, element) {
        if (position >= 0 && position <= this.length) {
            let node = new Node(element);
            let current = this.head;
            let previous = null;
            let index = 0;
            if (position === 0) {
                node.next = this.head.next;
                this.head = node;
            } else {
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        }
        return false;
    }
    removeAt(position) {
        if (position >= 0 && position < this.length) {
            let index = 0;
            let current = this.head;
            let previous = null;
            if (position === 0) {
                this.head = this.head.next;
            } else {
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
            }
            this.length--;
            return current.element;
        }
        return false;
    }
    findIndex(element) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.element === element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
    remove(element) {
        let index = this.findIndex(element);
        return this.removeAt(index);
    }

    isEmpty() {
        return !this.length;
    }

    size() {
        return this.length;
    }

    toString() {
        let current = this.head;
        let string = "";
        while (current) {
            string += `${current.element}`;
            current = current.next;
        }
        return string;
    }
}



let linkList = new LinkedList();
console.log(linkList);
linkList.append(0);
linkList.append(1);
linkList.append(2);
linkList.append(3);
linkList.append(4);
console.log(linkList);