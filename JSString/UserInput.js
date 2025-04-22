const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseString() {
    rl.question('Enter a string to reverse: ', (str1) => {
        let result = "";
        for (let i = str1.length - 1; i >= 0; i--) {
            result += str1[i];
            console.log(str1[i]);
        }
        console.log(result);
        if(result===str1){
        
            console.log("the string is palidrom");
        }else{
            console.log("the string is not palidrom");
        }
        rl.close();
    });
}
reverseString();
