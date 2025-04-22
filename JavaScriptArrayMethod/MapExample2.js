/* Question is----
Using the map method, write a function that takes an array of 
numbers and returns a new array where each number is squared, but 
only if it's an even number. */

let array1=[10,20,3,21,5,6,7,8,9];

let newarray=array1.map((number)=>{
    if(number%2===0){
        return number**2;
    }else{
        return null;
    }
}).filter((value)=>value != null);
console.log(newarray);


