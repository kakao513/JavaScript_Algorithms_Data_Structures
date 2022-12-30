// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// Examples:
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// Note: You may assume the string contains only lowercase alphabets.



function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    let obj1 = {};
    let obj2 = {};

    if (str1 === str2) {
        return true;
    }

    for (let elem of str1) {
        obj1[elem] = (obj1[elem] || 0) + 1;
    }

    for (let elem of str2) {
        obj2[elem] = (obj2[elem] || 0) + 1;
    } 

    for (const key in obj1) {
        if (!obj2.hasOwnProperty(key)) {
            return false; 
        } 
        
        if ((obj1[key] !== obj2[key])) {
                return false;
            }
        }
        return true;
    }
  

// console.log(validAnagram('', '')) // true
// console.log(validAnagram('aaz', 'zza')) // false
// console.log(validAnagram('anagram', 'nagaram')) // true
// console.log(validAnagram("rat","car")) // false) // false
// console.log(validAnagram('awesome', 'awesom')) // false
// console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
// console.log(validAnagram('qwerty', 'qeywrt')) // true
// console.log(validAnagram('texttwisttime', 'timetwisttext')) // true



// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

function countUniqueValues(arr) {
    let i = 0;
    let j = 1;
    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            j++;
        }
        
        if (arr[i] !== arr[j]) {
            arr[i + 1] = arr[j];
            i++;
            j++;
        }
    }
    const result = arr.slice(0, i + 1);
    return result.length;
}


// console.log(countUniqueValues([1,1,1,1,1,2])) // 2
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
// console.log(countUniqueValues([])) // 0
// console.log(countUniqueValues([-2,-1,-1,0,1])) // 4


// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:

function sameFrequency(num1, num2) {
    // good luck. Add any arguments you deem necessary.

    const text1 = num1.toString();
    const text2 = num2.toString();

    const obj1 = {};
    const obj2 = {};

    for (const elem of text1) {
        obj1[elem] = (obj1[elem] || 0) + 1;
    }

    for (const elem of text2) {
        obj2[elem] = (obj2[elem] || 0) + 1;
    }

    for (const key in obj1) {
        if (!obj2.hasOwnProperty(key)) {
            return false;
        } else {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
    }
    return true;
  }

// console.log(sameFrequency(182,281)) // true
// console.log(sameFrequency(34,14))// false
// console.log(sameFrequency(3589578, 5879385)) // true
// console.log(sameFrequency(22,222)) // false


// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.


function areThereDuplicates(...args) {
    const obj = {};
    // good luck. (supply any arguments you deem necessary.)
    for (const elem of args) {
        obj[elem] = (obj[elem] || 0) + 1;
    }

    for (const key in obj) {
        if (obj[key] > 1) {
            return true;
        } 
    }
    return false;
}


// console.log(areThereDuplicates(1, 2, 3)) // false
// console.log(areThereDuplicates(1, 2, 2)) // true 
// console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true




// Write a function called averagePair. 
// Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

function averagePair(arr, avg) {
    // add whatever parameters you deem necessary - good luck!
    let start = 0;
    let pointer = 1;

    while (start < arr.length - 1) {
        const sumAvg = (arr[start] + arr[pointer]) / 2;
        if (sumAvg !== avg) {
            pointer++;  
        } else {
            return true;
        }

        if (pointer > arr.length - 1) {
            start++;
            pointer = start + 1;
        }
    }
    return false;
  }


// console.log(averagePair([1,2,3],2.5)) // true
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
// console.log(averagePair([],4)) // false


// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. 
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    let start = 0;
    let pointer = 0;

    while (pointer < str2.length) {
        if (str1[start] === str2[pointer]) {
            pointer++;
            start++;
        } else {
            pointer++
        }

        if (start === str1.length) {
            return true;
        }
    }
    return false; 
  }


// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.logisSubsequence('abc', 'acb'); // false (order matters)



// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// function maxSubarraySum(arr, num){
//     // add whatever parameters you deem necessary - good luck
    
//     if (num > arr.length) {
//         return null;
//     }

//     let maxSum = 0;
//     let tempSum;
    
//     for (let i = 0; i < num; i++) {
//         maxSum +=arr[i];
//     }

//     tempSum = maxSum;

//     for (let i = num; i < arr.length; i++) {
//         tempSum = tempSum - arr[i - num] + arr[i];
//         maxSum = Math.max(maxSum, tempSum);
//     }
//     return maxSum;
//   }


//   console.log(maxSubarraySum([100,200,300,400], 2)) // 700
//   console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
//   console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
//   console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
//   console.log(maxSubarraySum([2,3], 3)) // null  


// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

function maxSumarraySum(arr, total) {
    let start = 0;
    let end = 0;
    let sum = 0;
    let minLen = Infinity;

    while (start < arr.length) {
        if (sum < total && end < num.length) {
            sum += arr[end];
            end ++;
        }

        else if (total <= sum) {
            minLen = Math.min(minLen, end - start); 
            sum -= arr[start];
            start++;
        }

        else {
            break;
        }
    }
    if (minLen === Infinity) {
        return 0;
    }

    return minLen;

}


// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

function findLongestSubstring(str) {    
    let longest = 0;
    let start = 0;
    let seen = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }

        seen[char] = i + 1; 
    }

    return len;
}



// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6