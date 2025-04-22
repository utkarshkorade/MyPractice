let arr=["jan","feb","march","april","may"];

console.log(arr);

arr.push("dec");
console.log(arr);
arr.splice(1,1);//this is used for delet the array element
console.log(arr);
arr.splice(1,1,"feb"); // this is for update the array element 
console.log(arr);

const products=[
    {pdname:"laptop",price:125000},
    {pdname:"mobile",price:125000},
    {pdname:"bike",price:700000}
];

console.log(products);

const result=products.filter((product)=>{
    return product.price<500000;
});
console.log(result);

