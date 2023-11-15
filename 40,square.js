const squareArray=(arr)=>{
    var c=[];
    for (let i = 0; i < arr.length; i++) {
        c[i]=arr[i]*arr[i];
         
    }
   return c;
}
console.log(  squareArray([20,10,30]));