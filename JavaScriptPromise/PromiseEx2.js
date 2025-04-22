function solvesomething(a,b){
    const result=new Promise((resolve,reject)=>{
        resolve(a+b);
    });
    return result;
}

function getdata(data){
console.log(data);
};

const endresult=solvesomething(10,20);
endresult.then(getdata);

