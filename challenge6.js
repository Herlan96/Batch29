function sentenceManipulation(sentence) {
    
    let newsentence = sentence.split(' ')

    if (newsentence[0] === 'a' || newsentence[0] === 'i' || newsentence[0] === 'u' || newsentence[0] === 'e' || newsentence[0] === 'o') {
        console.log(sentence)
    }
    else console.log(sentence.slice(3, sentence.length) + sentence.charAt(0) + 'nyo')
}


console.log('ibu pergi ke pasar bersama aku')