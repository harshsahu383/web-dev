
// Write a function filterNumbers(arr) that returns only numbers from a mixed array
function filterNumbers(arr) {
  return arr.filter((item) => typeof item === "number");
}

// Task 2: Array Reversal

// Write a function reverseArray(arr) that reverses the array
function reverseArray(arr) {
  return arr.reverse();
}
// Task 3: Find Maximum in an Array

// Write a function findMax(arr) that returns the largest number in the array


function findMax(arr) {
  return Math.max(arr);
}
// Task 4: Remove Duplicates from an Array

// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
let arr = [,1,2,3,1,2,1];
console.log(removeDuplicates(arr))
// Task 5: Flatten a Nested Array

// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
function flattenArray(arr) {
  return arr.reduce((flat, item) => 
    Array.isArray(item) ? flat.concat(flattenArray(item)) : flat.concat(item)
  , []);
}
