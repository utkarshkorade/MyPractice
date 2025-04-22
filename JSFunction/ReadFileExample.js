const fs=require("fs");

// this is import file system modeule

fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(data)
})
let a=0;
for(let i=0;i<=9000000;i++){
    a++;
}
console.log("hii there aadesh here");

/* the logic behind this is when you import file modeule then the some time
is require for reading beacuse fs  asynchronus  thats it will excute after second print  */
