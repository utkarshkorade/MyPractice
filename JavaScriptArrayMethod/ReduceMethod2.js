/* Question
Write a JavaScript function that calculates the total price of items 
in a shopping cart. The function should take an array of item prices 
as input and return the total price. */

let shoppingCart=[1000,9000,3000,4000,5000,300,900];

let totalprice=shoppingCart.reduce((pre,cur)=> pre+cur);

console.log(totalprice);