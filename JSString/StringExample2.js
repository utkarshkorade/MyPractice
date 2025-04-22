
/*Write a function to check if all the vowels presents in a string 
or not? */
function checkVowel(word){
  let result=true;
    for(let i=0;i<word.length;i++){
     
        if((word[i]=='a')||(word[i]=='e')||(word[i]=='i')||(word[i]=='o')||(word[i]=='u')){
            result=false;
        }
    }
    if(result===false){
        console.log("yes vowel is here.....");
    }else{
        console.log("voewl is not there....");
    }
}
checkVowel("dzzzzzzzzsah");