/* 1. Write a function processNumbers(arr) that takes an array of
numbers, squares each number, filters out the even numbers, and
returns the sum of the remaining numbers. */
function processNumbers(arr) {
    const squared = arr.map(num => num * num);
    const oddNumbers = squared.filter(num => num % 2 !== 0);
    const sum = oddNumbers.reduce((acc, num) => acc + num, 0);
    return sum;
  }
const numbers = [1, 2, 3, 4, 5];
console.log(processNumbers(numbers)); 
/* 2.  Write a function squareNumbers(arr) that takes an array of numbers
and returns a new array with each number squared. */
function squareNumbers(arr) {
    return arr.map(num => num * num);
  }
const numbers = [1, 2, 3, 4, 5];
console.log(squareNumbers(numbers));
  

  
