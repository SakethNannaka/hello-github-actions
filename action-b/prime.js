function isPrime(num) {

    if (num === 2) {
      return true;
    }
    else if(num > 1){
      for (var i = 2;  i < num; i++) {
  
        if (num % i !== 0 ) {
          return true;
        }
  
        else if (num === i * i) {
          return false
        }
  
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  
  }
var assert = require('assert');
assert(isPrime(1)==false, " Test case 1 passed - isPrime(1)");
assert(isPrime(10)==false, " Test case 1 passed - isPrime(10)");
assert(isPrime(3),"TestCase 3 passed-isPrime(3)")
console.log("All Test Cases Passed !!")
