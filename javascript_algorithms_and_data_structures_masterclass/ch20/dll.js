class Node {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class DLL {
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
            return null;
        } else {
            let result = this.tail;
            if (this.length === 1) {
                this.head = null;
                this.tail = null
            } else {
                this.tail = result.prev;
                this.tail.next = null;
            }
            result.prev = null;
            this.length--;
            return result;
        }
    }
}

let dll1 = new DLL();
dll1.push(1);
console.log(dll1);
dll1.push(2);
console.log(dll1);
dll1.pop()
console.log(dll1);
dll1.pop()
console.log(dll1);
dll1.pop()
console.log(dll1);