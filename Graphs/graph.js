class Graph {
	constructor() {
		this.adjacencyList = {}
	}

	addVertex(vertex) {
		if (this.adjacencyList[vertex]) return
		this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2) {
		if (!this.adjacencyList[vertex1].includes(vertex2)) {
			this.adjacencyList[vertex1].push(vertex2);
		}

		if (!this.adjacencyList[vertex2].includes(vertex1)) {
			this.adjacencyList[vertex2].push(vertex1);
		}
	}
	
	removeEdge(vertex1, vertex2) {
		const targetIdx1 = this.adjacencyList[vertex1].indexOf(vertex2);
		this.adjacencyList[vertex1].splice(targetIdx1, 1);

		const targetIdx2 = this.adjacencyList[vertex2].indexOf(vertex1);
		this.adjacencyList[vertex2].splice(targetIdx2, 1);
	}

	removeVertex(vertex) {
		while(this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex];
	}
}


const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Seoul");
graph.addVertex("London");

graph.addEdge("Tokyo", "Seoul");
console.log(graph);

graph.removeVertex("Tokyo");
console.log(graph);