function sentenceManipulation(sentence) {

    const vowel = ('AIUEOaiueo')
    let newarray = sentence.split(' ')
    let result = []

    for (var i = 0; i < newarray.length; i++) {
        if (vowel.match(newarray[i].charAt(0))) {
            result.push(newarray[i])
        } else {
             result.push(newarray[i].slice(1)
            + newarray[i].charAt(0) + 'nyo')
        }

    }console.log(result.join(' '))
    
}
    
    
sentenceManipulation('ibu pergi ke pasar bersama aku')