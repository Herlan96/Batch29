


const fs = require('fs');



const param1 = process.argv;

console.log("Daftar Pekerjaan" + param1.length);




let data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
console.log(data)


switch (param1[2]) {
    case 'list':
        data.forEach((item, index) => {
            console.log(`${index + 1}. [${item.complete ? 'x' : ' '}] ${item.title}`)
        });
        break;

    case 'add':

        let title = param1.slice(3).join(' ')
        console.log(title)
        let newData = {
            title: "saya akan memasak",
            complete: false,
            tags: []
        }


        data.push(newData)
        fs.writeFileSync('data3.json', JSON.stringify(data), 'utf-8')


    case 'deleted':

        let deleted = param1[3]- 1
        data.splice(deleted, 1)
        console.log(data)


        break;

    



    default:
        console.log('>>> JS TODO <<<')
        console.log('$ node todo.js <command>')
        console.log('$ node todo.js task <task_id>')
        console.log('$ node todo.js add <task_content>')
        console.log('$ node todo.js delete <task_id>')
        console.log('$ node todo.js complete <task_id>')
        console.log('$ node todo.js unncomplete <task_id>')
        console.log('$ node todo.js list:outstanding asc|desc')
        console.log('$ node todo.js list:completed asc|desc')
        console.log('$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N')
        console.log('$ node todo.js filter:<tag_name>')




        break;


}




