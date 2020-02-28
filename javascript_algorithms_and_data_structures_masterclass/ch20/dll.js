class Node {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        } else {
            let result = this.tail;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = result.prev;
                this.tail.next = null;
            }
            result.prev = null;
            this.length--;
            return result;
        }
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        } else {
            let result = this.head;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = result.next;
                this.head.prev = null;
            }
            result.next = null;
            this.length--;
            return result
        }
    }

    get(idx) {
        if (idx < 0 || idx > this.length) {
            return undefined;
        }

        let current = this.head;
        for (let i=0; i<idx; i++){
            current = current.next;
        }

        return current;
    }

    set(idx, val) {
        if (idx < 0 || idx > this.length) { return false; }
        let node = this.get(idx);
        node.val = val;
        return true;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) {
            return false;
        } else if (idx === 0) {
            this.unshift(val);
        } else if (idx === this.length) {
            this.push(val);
        } else {
            let beforeNode = this.get(idx);
            let afterNode = beforeNode.next;
            let newNode = new Node(val);
            newNode.prev = beforeNode;
            newNode.next = afterNode;
            beforeNode.next = newNode;
            afterNode.prev = newNode;
        }
        this.length++;
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx > this.length - 1) { 
            return undefined; 
        } else if (idx === 0) {
            return this.shift();
        } else if (idx === this.length - 1) {
            return this.pop();
        } else {
            let node = this.get(idx);
            let beforeNode = node.prev;
            let afterNode = node.next;
            node.prev = null;
            node.next = null;
            beforeNode.next = afterNode;
            afterNode.prev = beforeNode;
            this.length--;
            return node;
        }
    }

    reverse() {
        if (this.length === 0 || this.length === 1) { return this; }
        let curNode = this.head;
        for (let i=0; i<this.length; i++) {
            let nextNode = curNode.next;
            [curNode.prev, curNode.next] = [curNode.next, curNode.prev];
            curNode = nextNode;
        }
        [this.head, this.tail] = [this.tail, this.head];
        return this;
    }
}

let dll1 = new DoublyLinkedList();
dll1.push(5).push(10).push(15).push(20);
r = dll1.reverse();
console.log(r);