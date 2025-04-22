/*Write a JavaScript function that prints the letters 'a' through 
'z' in the console. You should use a loop to iterate through the 
letters and print each one on a new line. */

/*function printAbcd(){
    for(let i='a';i<='z';i++){
        console.log(i);
    }
}
printAbcd();

in this code i<='z' will not compare the char beacuse is comapre to i as character so this not allowed in js
for that you want to compare with there code value (ASCII VLAUE).

so the write code is ---->
*/

function printAbcd() {
    
    for(i='a'.charCodeAt(0);i<='z'.charCodeAt(0);i++){
        
        console.log(String.fromCharCode(i));
        console.log(String.fromCharCode(i-32));//this is for print the capital letter
    }
}
printAbcd();
