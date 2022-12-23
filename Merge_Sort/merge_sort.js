function merge(arr1, arr2) {
    const result = [];
    
    let isOn = true;
    let firstMarker = 0;
    let secondMarker = 0;
    while (isOn) {
        const firstArrNum = arr1[firstMarker];
        const secondArrNum = arr2[secondMarker];

        if (firstArrNum >= secondArrNum) {
            result.push(secondArrNum);
            secondMarker += 1;
        } else if (secondArrNum > firstArrNum) {
            result.push(firstArrNum);
            firstMarker += 1;
        } 

        if (firstMarker >= arr1.length) {
            isOn = false;
            return result.concat(arr2.slice(secondMarker));

        }  
        if (secondMarker >= arr2.length) {
            isOn = false;
            return result.concat(arr1.slice(firstMarker));
        }
    } 
}

function mergeSort (arr) {
    // Setting the stopping condition
    const results = [];
    if (arr.length === 1 || arr.length === 0) {
        return results.push(arr);
    }

    const arr1 = arr.slice(0, Math.floor(arr.length / 2));
    const arr2 = arr.slice(Math.floor(arr.length / 2));
    console.log("arr1", arr1);
    console.log("arr2", arr2);

    mergeSort(arr1);
    mergeSort(arr2);

}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);


}



console.log(mergeSort([4, 6, 3, 2, 5]))

