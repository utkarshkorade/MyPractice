
/* IN Synchronous function first execute whatever come first then other the output if the following code is 

*/
function syncsleep(){
    let a=0;
    for(let i=0;i<=900000000;i++){
        a++;
    }
}

syncsleep();

console.log("hii there");