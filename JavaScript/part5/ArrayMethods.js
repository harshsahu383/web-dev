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
// Cart Total with reduce():
// Calculate the total price.

const cart = [
  { item: "Shirt", price: 500 },
  { item: "Pants", price: 700 },
  { item: "Shoes", price: 1200 }
];
const totalPrice = cart.reduce((acc,item) => {
    return acc + item.price
},0);
console.log(totalPrice);
// Chained filter() + map():
// Given [2, 5, 8, 11, 15], filter out even numbers and then double the remaining numbers.
// 👉 Output: [10, 22, 30]
let arr11 = [2, 5, 8, 11, 15];
let arr12 = arr11.filter((item) => item % 2 == 0).map((item) => item * 2);
console.log(arr12);
// Use map() on objects:
// Given:
// const students = [
//   { name: "Harsh", marks: 85 },
//   { name: "Amit", marks: 72 },
//   { name: "Ravi", marks: 90 }
// ];
// Create a new array that just has names of students in uppercase.
// 👉 Output: ["HARSH", "AMIT", "RAVI"]
const students = [
  { name: "Harsh", marks: 85 },
  { name: "Amit", marks: 72 },
  { name: "Ravi", marks: 90 }
];
const arr13 = students.map((item) => item.name.toUpperCase());
console.log(arr13);
// Todo Filter
// Given an array of todo objects, filter out the completed tasks.

// const todos = [
//   { task: "Learn JS", done: true },
//   { task: "Write code", done: false },
//   { task: "Sleep", done: true }
// ];
const todos = [
  { task: "Learn JS", done: true },
  { task: "Write code", done: false },
  { task: "Sleep", done: true }
];
const completed = todos.filter((item) => {
    return item.done === true;
})
console.log(completed);
// Group Users by Age with reduce()
// Convert:
// const users = [
//   { name: "Harsh", age: 20 },
//   { name: "Amit", age: 25 },
//   { name: "Ravi", age: 20 }
// ];
// To:
// {
    //   20: [{ name: "Harsh", age: 20 }, { name: "Ravi", age: 20 }],
    //   25: [{ name: "Amit", age: 25 }]
    // }
    
    const users1 = [
      { name: "Harsh", age: 20 },
      { name: "Amit", age: 25 },
      { name: "Ravi", age: 20 }
    ];
    const users2 = users1.reduce((acc,item) => {
        // if(items.age){

        // }
    });
//     Create a getNames function using map()
// Return an array of just names from a user list:
// const people = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 23 }
// ];
const people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 23 }
];
const peopl = people.map((item) => item.name);
console.log(peopl);
