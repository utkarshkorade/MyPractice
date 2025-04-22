/* Write a function to count the number of vowels in a string */

function countVowel(word){
    let count=0;
    for(let i=0;i<word.length;i++){
     
        if((word[i]=='a')||(word[i]=='e')||(word[i]=='i')||(word[i]=='o')||(word[i]=='u')){
          count++;
        }
    }
    console.log(count);
}
countVowel("aadeshkashid");