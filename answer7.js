function smallestArray(arr){
    let smallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < smallest) {
      smallest= element;
    }
    }
    return smallest;
  }
  const myArray=[2,3,4];
  const resuit = smallestArray(myArray);
  console.log(resuit);