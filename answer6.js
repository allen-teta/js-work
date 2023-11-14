function greatestArray(arr){
    let greatest = 0;
    for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > greatest) {
      greatest= element;
    }
    }
    return greatest;
}
const myArray=[2,3,4];
const sum = greatestArray(myArray);
console.log(sum);