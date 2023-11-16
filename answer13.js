function pattern(row){

    for (let j = 0; j < row ; j++) {
        var arr="";
        for (let i = 0; i < row; i++) {
          if(i===0||i===row-1||j===0||j===row-1){
            arr+="1 ";
          } 
          else{
            arr+="0 "
          } 
        }
        console.log(arr);





    }
}
pattern(5);