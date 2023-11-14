function pattern(row){
    for(let i=0 ;i<row;i++){
        let arr=[];
        for(let j=row-1 ;j>=0;j--){
            if(i===j){
                arr+="1 "
            }
            else{
                arr+="  "
            }
        
        }
        console.log(arr);
    }
    
    }
    pattern(4);
    