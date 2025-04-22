function printsomething(a,b){
    return new Promise((resolve ,reject)=>{
        resolve("success");
    })
}
function getdata(data){
   console.log(data);
}

const endresult= printsomething();
endresult.then(getdata);

//another way of using promise

function printsome(){
    return new Promise((resolve ,reject)=>{
        resolve("success");
    })
}

const finalresult= printsome();
finalresult.then((data)=>{
    console.log(data);
});