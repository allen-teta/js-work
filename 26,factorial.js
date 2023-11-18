function factorial(a){
    sum=1;
    if(a<0){
        return "error";
    }
    else{
    for (let i=a;i>0;i--){
        sum*=i;
    }
    return sum;
}


}
console.log(factorial(7));
