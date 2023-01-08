class MaxBinaryHeap {
    constructor(){
        this.values = [41, 39, 33, 18, 27, 12];
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax() {
        if (!this.values) return undefined;
        let parentIdx = 0;
        let parentElement = this.values[parentIdx];

        const temp = this.values[parentIdx];
        this.values[parentIdx] = this.values[this.values.length - 1];
        this.values[this.values.length - 1] = temp;
        const removedMax = this.values.pop();

        while (true) {
            parentElement = this.values[parentIdx];
            let firstChildIdx = (2 * parentIdx) + 1;
            let secondChildIdx = (2 * parentIdx) + 2;
            let firstChildElem = this.values[firstChildIdx];
            let secondChildElem = this.values[secondChildIdx];

            let childIdx;
            let childElem = Math.max(firstChildElem, secondChildElem);

						console.log("????", firstChildElem, secondChildElem)

            if (childElem === firstChildElem) childIdx = firstChildIdx;
            else childIdx = secondChildIdx;

            if (parentElement <= childElem) {
                this.values[childIdx] = parentElement;
                this.values[parentIdx] = childElem;

                parentIdx = childIdx;
            }

            else break;
        }

        return removedMax;
    } 
}



const maxHeap = new MaxBinaryHeap();

