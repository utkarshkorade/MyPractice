const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send("welcome to express coading");
    
})

app.get('/hello',(req,res)=>{
    res.send("welcome to express coading");
})

app.listen(port);