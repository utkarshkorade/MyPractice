
function isAnagram(string1,string2){
    if(string1.length !== string2.length){
        return false;
    }

    let counter={};
    for(let letter of string1){ //hello
        
        counter[letter]=(counter[letter] || 0)+1;
        console.log(counter[letter]);
    }

    for(let item of string2){

        if(!counter[item]){
            
            return false
        }

        counter[item]-=1;
    }

    return true;
}
const check=isAnagram("hello","elloh");
console.log(check);



