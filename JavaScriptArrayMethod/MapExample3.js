/*Question:-
Using the map method, write a function that takes an array of 
names and returns a new array where each name is prefixed with "Mr”.  */

let array1=["facebook","meta","google"];

let newarray=array1.map((names)=>{

    return "MR."+names;

});
console.log(newarray);