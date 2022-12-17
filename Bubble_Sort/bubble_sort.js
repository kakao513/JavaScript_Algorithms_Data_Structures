function sort(arr) {
    return arr;
}

// sort([23, 45, 6, 12, 13]); // [6, 12, 13, 23, 45]

function bubbleSOrt(arr) {
    let noSwaps 
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            noSwaps = true
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                //SWAP!
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp; 
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

bubbleSOrt([8, 1, 2, 3, 4, 5, 6, 7]);

