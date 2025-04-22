var arr=[10,20,30,50,9,12,2000];

var largenum=arr[0];

for(let i=0;i<arr.length;i++){
    
    if(arr[i]>=largenum){

        largenum=arr[i];
    }

}
document.write("the larger number is::"+largernum);