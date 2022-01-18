function weirdMultiply(sentence) {

    let str = sentence.toString()
    let total = 1
  for (let i=0; i < str.length; i++) {
    total *= str[i]
    
    }return total
}

console.log(weirdMultiply(39))
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))
