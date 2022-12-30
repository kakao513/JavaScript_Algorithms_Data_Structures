class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } 
        
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail; 
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        let removed;
        
        if (!this.head) {
            return undefined;
        }

        else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        
        else {
            removed = this.tail;
            this.tail = removed.prev;
            this.tail.next = null;
        }
        this.length--;
        return removed;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }

        const removed = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        else {
            this.head = removed.next;
            removed.next = null;
            this.head.prev = null;

        }
        this.length--;
        return removed; 
    }

    unshift(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let current, count;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
    
            while (count != index) {
                current = current.next;
                count++;
    
            }
            return current;
        } else {
            count = this.length - 1;
            current = this.tail;
            
            while (count != index) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }

    set(index, value) {
        const returnedNode = this.get(index);

        if (!returnedNode) {
            return false;
        }

        returnedNode.val = value; 
        return true;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            return this.unshift(value);
        }

        if (index === this.length) {
            return this.push(value);
        }

        const newNode = new Node(value);
        const oldNode = this.get(index - 1);
        newNode.next = oldNode.next;  
        oldNode.next = newNode;
        
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index === 0) {
            return this.shift();
        }

        if (index === this.length - 1) {
            return this.pop();
        }

        const currentNode = this.get(index);
        const prevNode = currentNode.prev;
        const nextNode = currentNode.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        currentNode.next = null;
        currentNode.preev = null;

        this.length--;
        return currentNode;
    }
}

const list = new DoublyLinkedList();
list.push(99);
list.push(100);
list.push("Last Item");
list.insert(1, "insertedNode")


console.log(list);