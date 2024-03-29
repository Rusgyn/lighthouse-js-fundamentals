// This function should take a number as a parameter and return true if it is odd and false otherwise.

const isOdd = function(num){
  return !(num % 2 === 0);
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));

/* RESULT:
3 is odd: true
8 is odd: false */