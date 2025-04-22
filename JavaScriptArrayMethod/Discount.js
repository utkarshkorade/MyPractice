var array=[250,450,600,700,900];

document.write("Price Array :- "+array+"<br>");

var discountarray=[];

var discount=0;
var finalvalue=0;
for(let i=0;i<array.length;i++){
    
    discount=array[i]/10;
    
    finalvalue=array[i]-discount;
    discountarray[i]=finalvalue;
}

document.write("Array With Discount::-"+discountarray);
