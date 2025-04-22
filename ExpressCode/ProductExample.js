const express= require('express');
const app=express();
const port=3000;

app.use(express.json());

let products=[{
    id:1, brand:"apple", productname:"iphone15",price:200000,
},
{
    id:2, brand:"samsung", productname:"galaxyj2",price:9000,
}];

app.get("/products",(req,res)=>{
    res.json(products);
});

app.post("/postproduct",(req,res)=>{
    const newproduct=req.body;
    const {brand,productname,price}=newproduct;
    if(!productname||!brand||!price){
        res.status(404).json("Invalid Input");
    }
    newproduct.id=products.length+1;
    products.push(newproduct);
    res.status(201).json(newproduct);
});
app.put("/updateproduct/:id",(req,res)=>{
    const{id}=req.params;
    const{brand,productname,price}=req.body;
    const product=products.find(b=>b.id==id);
    if(!product){
        res.status(404).json("product not found");
    }
    if(brand) product.brand=brand;
    if(productname){
        product.productname=productname;
    }
    if(brand) product.price=price;

    res.json(product);
});
app.delete("/deleteproduct/:id",(req,res)=>{
    const {id}=req.params;
    const productIndex=products.findIndex(b=>b.id==id);
    if(productIndex==-1){
        res.status(404).json("book not found");
    }
    products.splice(productIndex,1);
    res.status(201).json("deleted successfully");
});

app.listen(port,()=>{
    console.log(`app is running on server port${port}`);
})
