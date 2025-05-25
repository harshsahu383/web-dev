
// Loops
// Task 1: Sum of First N Natural Numbers

// Write a function sumOfN(n) that returns the sum of the first n natural numbers



// Task 2: Multiplication Table

// Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4



// Task 3: Count Vowels in a String

// Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.
function sumOfN(n){
    let sum  = 0;
    for(let i = 1; i<=n;i++){
     sum+=i;
    }
    return sum;
}
function printMultiplicationTable(n){
    let table = [];

    for (let i = 1; i <= 10; i++) {
      table.push(`${n} * ${i} = ${n * i}`);
    }

    return table;
}
function countVowels(str){
    let count = 0;
    for(let i = 0;i<str.length;i++)
    {
        if(str[i]=='A' || str[i]=='E' || str[i]=='I' || str[i]=='O' ||str[i]=='U' || str[i]=='a' || str[i]=='i' || str[i]=='o' || str[i]=='e' || str[i]=='u'){
            count++;
        }
    }
    return count;
}