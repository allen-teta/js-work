function countVowels(inputString){
    var vowel= ["b","c","d","f","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
    var vow = inputString . toLowerCase();
    var count = 0;
    for( let i=0; i < vow.length; i++){
      if(vowel.includes(vow[i])){
          count++;
      }
    }
    return count;
    
  }
  console.log(countVowels("TETA"));