class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// const first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("How");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");


// Singly Linked List

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    
    pop() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        while (current.next) {
            if (current.next === this.tail) {
                current.next = null;
                this.tail = current;
                this.length--;
            } else {
                current = current.next;
            }
        }
        return this;
    }

    shift() {
        let shiftedNode;

        if (!this.head) {
            return undefined;
        }
        
        let current = this.head;

        if (current.next) {
            shiftedNode = this.head;
            this.head = current.next;
            current = null;
            this.length--;
        }
        return shiftedNode;
    }

    unshift(val) {
        const newNode = new Node(val);
        let currentHead = this.head;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = currentHead;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (this.length < index || index < 0) {
            return null;
        }

        let currentIndex = 0;
        let current = this.head;

        while (current) {
            if (currentIndex === index) {
                return current;
            }
            current = current.next
            currentIndex++
        }
    }

    set(index, value) {
        let currentNode = this.get(index); 

        if (!currentNode) {
            return false;
        } 
        currentNode.val = value;
        return true;
    }

    insert(index, value) {
        const newNode = new Node(value);

        if (this.length < index) {
            return false;
        }

        else if (this.length === index) {
            this.get(value);
            return true;
        } 
        
        else {
            const prevNode = this.get(index - 1);
            const prevNextNode = prevNode.next;
            prevNode.next = newNode;
            newNode.next = prevNextNode;
     
        }

        this.length++;
        return this;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index === this.length - 1) {
            this.pop();
        }

        if (index === 0) {
            this.shift();
        }

        const prev = this.get(index - 1);
        const removedNode = prev.next
        const connectNode = removedNode.next;
        prev.next = connectNode;
        this.length--;

        return removedNode;
    }
}

const list = new SinglyLinkedList();
list.push("Hello");
list.push("GoodBye");
list.push("Really???");
list.remove(1);
console.log(list);





