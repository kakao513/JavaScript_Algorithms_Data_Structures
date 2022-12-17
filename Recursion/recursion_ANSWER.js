// POWER SOLUTION

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}

// FACOTRIAL SOLUTION

function factorial(x){
    if (x < 0 ) return 0;
    if (x <= 1 ) return 1;
    return x * factorial(x-1);
 }

 // PRODUCT OF ARRAY SOLUTION

 function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

 // RECRUSIVE RANGE SOLUTION

 function recursiveRange(x){
    if (x === 0 ) return 0;
    return x + recursiveRange(x-1);
 }

 // FIBONACCI SOLUTION

 function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}



// flatten SOLUTION

function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }