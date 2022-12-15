// RECURSION EXERCISES

// Math.pow() expressed as in RECURSION

function power(base, exponent){
    if (exponent < 0) {
        return;
    }
    
    if (exponent === 0) {
        return 1;
    }
    
    return base * power(base, exponent - 1); 
}

// Factorial expressed as in RECURSION

function factorial(base){
    if (base === 0) {
        return 1;
    }

    return base * factorial(base - 1);
}

// productOfArray expressed as in RECURSION

function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    
    let base = arr[0];

    return base * productOfArray(arr.splice(1));
}

// recursiveRange expressed as in RECURSION

function recursiveRange(base) {
    if (base === 0) {
        return 0;
    }

    return base + recursiveRange(base - 1);
}

// fib expressed as in RECURSION

function fib(base) {
    if (base <= 1) {
        return base;
    }
    
    return fib(base - 1) + fib(base - 2);
}


// Reverse: Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(string) {
    function helper(string) {
        if (string.length === 0) {
            return "";
        }
        let lastChar = string.slice(-1);


        return lastChar + helper(string.slice(0, -1)); 
    }
    return helper(string);
}

// isPalindrome: Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(string) {
    function helper(string) {
        if (string.length === 0 || string.length === 1) {
            return true;
        }
        
        let firstChar = string.slice(0, 1);
        let lastChar = string.slice(-1);

        if (firstChar !== lastChar) {
            return false;
        }
        return helper(string.slice(1, -1))
    }
    return helper(string);
}

// some Recursive: Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.


// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false


function someRecursive(arr, cb){
    function helper(arr, cb) {
        if (arr.length === 0) {
            return false;
        }
        const result = cb(arr[0]);

        if (result === true) {
            return true;
        }

        if (result === false) {
            arr = arr.slice(1);
            return helper(arr, cb); 
        }
        return false;
    }

    return helper(arr, cb);
  }

// flatten : Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]




