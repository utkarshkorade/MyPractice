var array=[10,100,20,30,40,50,60,70,80,90];

// document.write(array);

var sum =0;

for(let i=0;i<array.length;i++){

    sum=array[i]+sum;
}

console.log(sum);
var average=sum/array.length;

console.log(average);
