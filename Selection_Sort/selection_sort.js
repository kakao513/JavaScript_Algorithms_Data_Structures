function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        for (let j = 1; j < arr.length; j++) {
            const compNum = arr[i + j];
            if (compNum < min) {
                arr[i + j] = min;
                arr[arr.indexOf(min)] = compNum
                min = compNum;
            } 
        }
        arr.splice(arr.indexOf(min), 1);
        arr.splice(i, 0, min);
    }
    return arr;
}


console.log(selectionSort([4, 1, 2, 7, 9, 5, 34, 3]));
