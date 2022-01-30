


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

        const title = param1.slice(3).join(" ")
        const todo = {
            title: title,
            complete: false,
            tags: []
        }
        data.push(todo)
        fs.writeFileSync('data.json', JSON.stringify(data, null, 3), 'utf-8')
        break;

    // node todo.js deleted
    case 'deleted':
        data.push(todo)
        fs.writeFileSync('data.json', JSON.stringify(data, null, 3), 'utf-8')
        break;

    // node todo.js complete
    case 'complete':
        data[id], complete = true
        fs.writeFileSync('data.json', JSON.stringify(data, null, 3), 'utf-8')
        break;

    // node todo.js list:outstanding asc
    case 'list:outstanding':
        console.log('pekerajaan yang belum selesai')
        if (param1[3] == 'asc') {
            for (let i = 0; i < data.length; i++)
                if (!data[i].complete)
                    console.log(`${index + 1}. [${item.complete ? 'x' : ' '}] ${item.title}`)
        } else {
            for (let i = data.length - 1; i >= 0; i--)
                if (!data[i].complete)
                    console.log(`${index + 1}. [${item.complete ? 'x' : ' '}] ${item.title}`)



        break;
        }

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




