


const fs = require('fs');



const param1 = process.argv;




let data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
let id = param1[3] - 1


switch (param1[2]) {
    case 'list':
        console.log("Daftar Pekerjaan :");
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
        console.log(`"${title}" telah ditambahkan`)
        break;

    // node todo.js delete
    case 'delete':
        let deleted = param1[3] - 1
        let dataDeleted = data[deleted]
        data.splice(deleted, 1)
        fs.writeFileSync('data.json', JSON.stringify(data, null, 3), 'utf-8')
        console.log(`"${dataDeleted.title}"telah dihapus dari daftar`)
        break;

    // node todo.js complete
    case 'complete':
        data[id].complete = true
        fs.writeFileSync('data.json', JSON.stringify(data, null, 3), 'utf-8')
        console.log(`"${data[id].title}"telah selesai`)
        break;

    // node todo.js uncomplete
    case 'uncomplete':
        data[id].complete = false
        fs.writeFileSync('data.json', JSON.stringify(data, null, 3), 'utf-8')
        console.log(`"${data[id].title}"status selesai dibatalkan`)
        break;

    // node todo.js list:outstanding asc
    case 'list:outstanding':
        console.log('pekerjaan yang belum selesai')
        if (param1[3] == 'asc') {
            for (let i = 0; i < data.length; i++)
                if (!data[i].complete)
                    console.log(`${i + 1}. [${data[i].complete ? 'x' : ' '}] ${data[i].title}`)
        } else {
            for (let i = data.length - 1; i >= 0; i--)
                if (!data[i].complete)
                    console.log(`${i + 1}. [${data[i].complete ? 'x' : ' '}] ${data[i].title}`)
        }
        break;

    // node todo.js list:completed desc
    case 'list:completed':
        console.log('pekerjaan sudah selesai')
        if (param1[3] == 'desc') {
            data.forEach((item, i) => {
                if (data[i].complete)
                    console.log(`${i + 1}. [${data[i].complete ? 'x' : ' '}] ${data[i].title}`)
            });
        } else {
            for (let i = data.length - 1; i >= 0; i--)
                if (data[i].complete)
                    console.log(`${i + 1}. [${data[i].complete ? 'x' : ' '}] ${data[i].title}`)

        }
        break;



    // node todo.js tag makan
    // dapat makan dan minum, pake slice
    // forEach.push
    case 'tag':
        let tags = param1.slice(4)
        tags.forEach(item => {
            if (!data[id].tags.includes(item))
                data[id].tags.push(item)
        })

        fs.writeFileSync('data.json', JSON.stringify(data, null, 3), 'utf-8')
        console.log(`tag '${tags}' telah ditambahkan ke daftar '${data[id].title}'`)



        break;


    // node todo.js filter makan // split
    // tag,includes('makan')

    default:
        let hasilSplit = param1[2].split(':')
        console.log(hasilSplit)
        if (hasilSplit[0] == 'filter') {
            console.log("Daftar Pekerjaan :");
            data.forEach((item, index) => {
                if (item.tags.includes(hasilSplit[1]))
                    console.log(`${index + 1}. [${item.complete ? 'x' : ' '}] ${item.title}`)
            });
            // console.log('mode filter')
        }

        break;


        // console.log('>>> JS TODO <<<')
        // console.log('$ node todo.js <command>')
        // console.log('$ node todo.js task <task_id>')
        // console.log('$ node todo.js add <task_content>')
        // console.log('$ node todo.js delete <task_id>')
        // console.log('$ node todo.js complete <task_id>')
        // console.log('$ node todo.js unncomplete <task_id>')
        // console.log('$ node todo.js list:outstanding asc|desc')
        // console.log('$ node todo.js list:completed asc|desc')
        // console.log('$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N')
        // console.log('$ node todo.js filter:<tag_name>')




        break;


}




