class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        const newStack = new Node(value);

        if (this.size === 0) {
            this.first = newStack;
            this.last = newStack; 
        }

        else if (this.size >= 1) {
            const oldFirst = this.first;
            this.first = newStack;
            newStack.next = oldFirst;
        }

        this.size++;
    }

    pop() {
        if (!this.size) {
            return null;
        }

        const removedNode = this.first;

        if (this.size === 1) {
            this.first = null;
            this.last = null;
        }

        else {
            const temp = this.first;
            this.first = temp.next;
        }   

        this.size--;
        return removedNode.value;
    }
}

const q = [];
q.push("FIRST");
q.push("SECOND");
q.push("THIRD");
console.log(q); // [ 'FIRST', 'SECOND', 'THIRD' ]

q.shift();
q.shift();
q.shift();
q.shift();
console.log(q); // []


q.unshift("FIRST");
q.unshift("SECOND");
q.unshift("THIRD");

q.pop();
q.pop();
q.pop();