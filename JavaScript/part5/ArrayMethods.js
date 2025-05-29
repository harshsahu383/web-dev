// Square a number using map 
let arr = [1,2,3,4,5];
let arr1 = arr.map((items) => items * items);
console.log(arr1);
// Use filter():
// Given [10, 20, 30, 40, 50], return only the numbers greater than 25.
// 👉 Output: [30, 40, 50]
let arr2 = [10,20,30,40,50];
let arr3 = arr2.filter((items) => items > 25);
console.log(arr3);
// Use reduce():
// Find the sum of [5, 10, 15].
// 👉 Output: 30
let arr4 = [10,20,30,40,50];
let arr5 = arr4.reduce((acc,item) => acc + item ,0);
console.log(arr5);
// Use forEach():
// Print each element in the array ["JS", "Python", "C++"] with the text " is awesome".
let arr6 = ["JS", "Python", "C++"];
 arr6.forEach((item) => {
console.log(`${item} is Awesomr`);
})

const users = [
  { id: 1, name: "Harsh" },
  { id: 2, name: "Amit" },
];
// Use find():
// Given an array of users:
// [p,tio'
// ][]]
// js
// Copy
// Edit
// const users = [
//   { id: 1, name: "Harsh" },
//   { id: 2, name: "Amit" }
// ];
// Find the user with id = 2.
// 👉 Output: { id: 2, name: "Amit" }
const user = users.find((item) =>  item.id === 2);
console.log(user);

// Use some():
// Check if any number in [3, 5, 7, 8] is even.
// // 👉 Output: true
let arr7 = [3, 5, 7, 8];
let arr8 = arr7.some((item) => item % 2 == 0);
console.log(arr8)
// Use every():
// Check if all strings in ["apple", "banana", "cherry"] are longer than 3 characters.
// 👉 Output: true

let arr9 = ["apple", "banana", "cherry"];
let arr10 = arr9.every((item) => item.length > 3);