function weirdMultiply(sentence) {

    let str = sentence.toString()
    
    if(str.length>1){

    let total = 1

    for (let i=0; i < str.length; i++) {
    total *= str[i]
    }
        return weirdMultiply(total)
    }else{
        return sentence
    }
}

console.log(weirdMultiply(39))
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))

