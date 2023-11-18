function findIndex(word,a) {
    var arr=word.split("");
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===a){ ;
        return i;
        }
    }
    
}
console.log("the index is:",findIndex("blessing","s"));