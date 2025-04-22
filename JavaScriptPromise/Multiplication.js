function Multiplication(a,b){

    const result=new Promise((resolve,reject)=>{
        if(a===0||b===0){
            reject("The error occurse....");
        }else{
            resolve(a*b);
        }

    })
    return result;
}

const endresult=Multiplication(10,0);
endresult
.then(function(data){
    console.log(data);
})
.catch(function(errormsg){
    console.log(errormsg);
})