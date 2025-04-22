/* Array Method::
1.push
2.ForEachExample
*/

function ArrayMethods(arr,element){

    console.log("Original array::",arr);

    arr.push(element);

    console.log("array After Pushing::",arr);
}

ArrayMethods([10,20,30,40,50,60,70],90);

function foreachExample(arr,ele){

    console.log("original array::",arr)
    // this is arrow function
    arr.forEach((num1,num2)=>{
        
        console.log(num1,num2)
    });

    //noramal function
    arr.forEach(function(index,item){
        console.log(index*2,item)
    })

    
}
foreachExample([10,30,50,60],10)

console.log("This are the mapexample in js","<br>")

function mapExample(arr){

    console.log("original array:",arr)

    const newarr=arr.map(function(item){

        return item*2
    })
    console.log(newarr)

    const newarr2 = arr.map(num => num * 2)
    console.log("newarr2", newarr2)

}

mapExample([1,2,3,4,5,6,7,8,9])

console.log("This are the filter in js","<br>")

function filterExample(arr){

    const result=arr.filter(function(item){

        console.log(item>30)
        return item>30
    })
   console.log (result)
}

filterExample([10,20,0,1,90,50,70])

console.log("This are the Find Method in js","<br>")

function findExample(arr){

    const result=arr.find(function(item){
        return item>3
    })
    console.log(result)
    const secondresult=arr.find(element =>element >4)
    console.log(secondresult)
}

findExample([0,2,3,4,5,0,0,5])

console.log("This are the Sort Method in js","<br>")

function sortMethod(arr){

    console.log("primary array::",arr)
    arr.sort(function(a,b){
        console.log(a,b)
        return a-b
       
    })

    const result=arr.sort((a,b)=>a-b)
    console.log("using arrow function",result)
    console.log("array after sort::",arr)
}

sortMethod([10,20,30,40,5,8,7])
