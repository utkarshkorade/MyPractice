
// function calculatesum(){
    
//     let a=0;
//     for(let i=0;i<9;i++){
//         a++;
//     }
// }
// setTimeout(calculatesum,9000);
// console.log("I AM FRIST");

// console.log("Starting...");

// setTimeout(() => {
//   console.log("This message is displayed after 9 seconds!");
// }, 9000);

// console.log("Waiting for 9 seconds...");
// //--------
// setTimeout(() => {
//     console.log("This message is displayed after 9 seconds!");
//   }, 9000);
  
// asynchronous await

function getdata(data,duration){
  return new Promise((resolve,reject)=>{

    setTimeout(()=>{

      console.log(`hiii am ${data} i come in ${duration}sec`);
      resolve('success');
    },duration);
  })
}
async function getcall(){
  await getdata("aadesh",5000);
}
getcall();



  