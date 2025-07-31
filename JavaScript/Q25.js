// // Practice Question
// Write a function to find minimium in array
let arr = [5,2,5,4,8,4];
let res = arr.reduce((res,el) => {
    if(res < el){
        return res;
    }
    else{
        return el;
    }
})
console.log(res);
