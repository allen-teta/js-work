function pattern(row){
    
    for (let j = 0; j < row ; j++) {
        var arr=[];
        for (let i = row-1; i >= 0; i--) {
          if(i>=j){
            arr+="1 ";
          } 
          else{
            arr+="0 ";
          } 
        }
        console.log(arr);
    }
}
pattern(5);