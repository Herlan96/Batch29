// const readline = require('readline')
import readline from 'readline'
import fs from 'fs'


if (!process.argv[2]){
    console.log("Tolong sertakan nama file sebagai inputan soalnya\n misalnya 'node solution.js data.json'")
    process.exit(1)
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Jawaban :"
})
console.log("Selamat datang di permainan Tebak-tebakan. kamu akan diberikan pertanyaan dari file ini'data.json'.\nUntuk bermain, jawablah dengan jawaban yang sesuai.\nGunakan 'skip' untuk menangguhkannya, dan di akhir pertanyaan akan ditanyakan lagi\n")

var soal = JSON.parse(fs.readFileSync(process.argv[2], 'utf-8'))
let index = 0
var count = 0
console.log(soal[index].Pertanyaan)

rl.prompt();

rl.on('line', (answer) => {
    if (answer == 'skip') {
        soal.push(soal[index])
        index++
        console.log(soal[index].Pertanyaan)
    } else {
        if (answer == soal[index].jawaban) {
            console.log("Anda Beruntung!\n")
            index++
            count = 0
            if (index < soal.length)
                console.log(soal[index].Pertanyaan)
            else {
                console.log('Anda Berhasil!\n')
                rl.close()
            }
        } else {
            count++
            console.log(`Anda Belum Beruntung!, anda telah salah ${count} kali, silahkan coba lagi.`)
        }
    }


    rl.prompt();
}).on(`close`, () => {
    process.exit(0);
});