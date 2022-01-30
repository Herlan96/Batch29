function stringManipulation(word) {
    
    let newword = word.split("")

    if (newword[0] === "a" || newword[0] === "i" || newword[0] === "u" || newword[0] === "e" || newword[0] === "o") {
        console.log(word)
    }
    else console.log(word.slice(1, word.length) + word.charAt(0) + 'nyo')
}


stringManipulation('ayam')
stringManipulation('bebek')
stringManipulation('burung')
stringManipulation('badak')
stringManipulation('banteng')
