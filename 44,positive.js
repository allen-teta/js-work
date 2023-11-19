function postiveElement(arr) {
    if(arr.every(element => element > 0)){
     return "All are positive";
    }
    else{
     return " not all are positive";
    }
    
     
 }
 console.log(postiveElement([3,4,5,6,-9]));
 