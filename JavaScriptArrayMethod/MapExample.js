/*  Question
Using the map method, write a function that takes an array of 
 strings and returns a new array where each string is capitalized */

//  let array1 = ["google", "microsoft", "apple", "meta"];

// let caparray = array1.map((comp) => {
//     return comp.toUpperCase();
// });

// console.log(caparray);

//second code to capitalize

let arr = ["abdc", "b", "c", "d"];

const arr2 = arr.map((item) => {
    // Get the ASCII value of the character and subtract 32
    let asciiValue = item.charCodeAt(0) - 32;
    // Convert the resulting ASCII value back to a character
    return String.fromCharCode(asciiValue);
});

console.log(arr2); 

