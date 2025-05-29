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
const user = users.find((item) =>  item.id === 2);
console.log(user);
