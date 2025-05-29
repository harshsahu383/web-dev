// Square a number using map 
let arr = [1,2,3,4,5];
let arr1 = arr.map((items) => items * items);
console.log(arr1);

let arr2 = [10,20,30,40,50];
let arr3 = arr2.filter((items) => items > 25);
console.log(arr3);

let arr4 = [10,20,30,40,50];
let arr5 = arr4.reduce((acc,item) => acc + item ,0);
console.log(arr5);
