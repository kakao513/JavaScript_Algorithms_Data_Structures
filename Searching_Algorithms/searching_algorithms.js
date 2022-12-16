// const usernames = ["fasdfasd", "fasdfasfd", "gfdsgdafsg", "gfasddgfasd", "kim"];

// console.log(usernames.indexOf("kim")); 

// Linear Search Pseudocode

function linearSearch(arr, value) {
    for (const element of arr) {
        if (element === value) {
            return arr.indexOf(value);
        } 
    }
    return -1;
}

// Binary Search Pseudocode

function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2); 
    while (arr[middle] !== elem && start <= end) {
        if (arr[middle] > elem) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === elem) {
        return middle;
    }
    return -1;
}


// Naive String Search 

function naiveStringSearch(long, short) {
    let wordCount = 0;

    for (let i = 0; i < long.length; i++) {
        let stringCount = 0;
        if (long[i] === short[0]) {
            for (let j = 1; j < short.length; j++) {
                if (short[j] == long[i + j]) {
                    stringCount += 1;
                    if (stringCount === short.length - 1) {
                        wordCount += 1;
                    }
                }
            }
        }
    }
    return wordCount;
}



