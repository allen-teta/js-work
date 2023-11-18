function stringModifier(word,pos,rep){

    var wordSplit=word.split("");
    wordSplit[pos-1]=rep;
    return wordSplit.join("");

}
console.log(stringModifier("Allen",2,"u"));