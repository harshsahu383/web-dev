// Task 1: Using Array Methods

// Write a function squareNumbers(arr) using map() and arrow functions



// Task 2: Custom Filter Function

// Create a function filterEvenNumbers(arr) using filter() and arrow functions



// Task 3: Sum of Positive Numbers

// Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions



// Task 4: Transform Array of Objects

// Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions



// Task 5: Find the Longest Word

// Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function

const squareNumbers = (arr) => arr.map((num) => num * num);
const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 == 0);
const sumPositiveNumbers = arr.filter((num) => num > 0).reduce((sum, num) => sum + num, 0);
const getNames = (arr) => arr.map((obj) => obj.name);
const findLongestWord = (arr) => arr.reduce(  (longest, current) => (current.length > longest.length ? current : longest),"" );