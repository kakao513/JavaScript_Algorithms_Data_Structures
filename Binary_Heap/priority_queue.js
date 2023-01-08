class PriorityQueue {
	constructor() {
			this.values = [];
	}

	enqueue(val, priority) {
		const newNode = new Node(val, priority);
		this.values.push(newNode);
		this.bubbleUp();
	}
}


class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

