class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newTree = new Node(value);

        if (!this.root) {
            this.root = newTree;
            return this;
        } 
        
        let current = this.root;
        if (value == current.value) return undefined;

        while(current) {
            if (newTree.value < current.value) {
                const temp = current;
                current = current.left;
                if (current === null) {
                    temp.left = newTree;
                    break;
                }
            }

            else if (newTree.value > current.value) {
                const temp = current;
                current = current.right;
                if (current === null) {
                    temp.right = newTree;
                    break;
                }
            }
        }

        return this;
        }

    find(value) {
        if (!this.root) return false;
        
        let current = this.root;

        while (current) {
            if (value === current.value) return current;;
            
            if (value < current.value) {
                current = current.left;
                if (current === null) return false;
            }

            else if (value > current.value) {
                current = current.right;
                if (current === null) return false;
            }
        }
    }
}



const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
tree.insert(1)
tree.insert(12)
tree.insert(16)
tree.insert(20)

console.log(tree.find(1));