// const readline = require('readline')
import readline from 'readline'
import fs from 'fs'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Tebakan :"
})
console.log("Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!")

var soal = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
let index = 0

console.log(soal[index].definition)

rl.prompt();

rl.on('line', (answer) => {
    if (answer == soal[index].term) {
        console.log("Selamat Anda Benar!")
        index++
        if (index < soal.length)
            console.log(soal[index].definition)
        else {
            console.log('Hore Anda Menang!')
            rl.close()
        }
    } else {
        console.log("Anda Belum Beruntung!")
    }


    rl.prompt();
}).on(`close`, () => {
    process.exit(0);
});
