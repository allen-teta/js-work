function stringLenght(str){
    var splitStr=[];
    var splitStr=str.split("");
    var n=0;
   
    for(let i=0;i<splitStr.length;i++){
        if(splitStr[i]===" "){
            n++;
        }

    }
    var nbrOfChar =(splitStr.length)-n;
    return nbrOfChar;
    
}
console.log(stringLenght("TetaAllen"));