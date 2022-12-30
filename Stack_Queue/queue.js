class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        
        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.size) return null;
        
        const removedNode = this.first;
        
        if (this.first === this.last) {
            this.last = null;
        } else {
            this.first = removedNode.next;
        }
        this.size--;
        return removedNode;
    }
}