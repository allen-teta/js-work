
function countVowels(inputString){
  var vowel= ["a","i","o","u","e"];
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