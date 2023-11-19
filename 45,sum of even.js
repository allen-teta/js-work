function sumOfEven(arr){
    sum=0;
    for(i=0;i<arr.length;i++){
      if (arr[i]%2===0) {
        sum+=arr[i];
      }
      
    }
   return sum; 
  }
  console.log(sumOfEven([3,4,8,7]));