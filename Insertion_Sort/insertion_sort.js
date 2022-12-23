function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const compNum = arr[i];
        for (let j = i; j > 0; j--) {
            console.log(j, j - 1)
            if (compNum < arr[j-1]) {
                const temp = arr[j-1]
                arr[j-1] = compNum;
                arr[j] = temp;
                console.log(arr);
            }
        }
    }
    return arr;
}

