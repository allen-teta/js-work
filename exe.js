function pattern(ones){
    for(let i = ones; i >= 0;i++ ){
        var arr ="";
        for (let j = 0; j <ones; j--){
        if (j===i) {
            arr+="1 ";
        }else{
            arr+="  ";
        }
    }
         console.log(arr);
    }
}
pattern(6);