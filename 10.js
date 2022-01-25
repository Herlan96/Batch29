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

    } return result.join(' ')

}





const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tulis kalimatmu disini >'
});

rl.prompt();

rl.on('line', (line) => {
    console.log(sentenceManipulation(line));

    rl.prompt();
}).on('close', () => {
    console.log('Good bye!');
    process.exit(0);
});