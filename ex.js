function greatest(arr){
    var sortedArray=arr.sort((a,b)=>b-a);
    return sortedArray[0];
}
console.log(greatest([10,5,67,2]));