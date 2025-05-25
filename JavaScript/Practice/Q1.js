// // Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".
 function convert(input){
    let number = new Number(input);
    return isNaN(number) ? "Not a number" : number ;
}
let input = "abc";
console.log(convert(input));
 
// //
// Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
function flipBollean(input){
    let  number = Boolean(input);
    return !number

}
/*Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"*/
function whatAmI(input){

  const num = Number(input);

  if (!isNaN(num) && input !== "") {
    return "I'm a number!";
  } else {
    return "I'm a string!";
  }
}
/* ";Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey*/
function isItTruthy(input){
    return input ? "It's truthy!" : "It's falsey!";
}