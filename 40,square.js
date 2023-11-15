const squareArray=(arr)=>{
    var sum=[];
    for (let i = 0; i < arr.length; i++) {
        sum[i]=arr[i]*arr[i];
         
    }
   return sum;
}
console.log(  squareArray([20,10,30]));