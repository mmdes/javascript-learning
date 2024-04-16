const path = require('path');
const filePath = path.resolve(__dirname, 'test.json');
const write = require('./modules/write');
const read = require('./modules/read');

/* here is where we write the file */

// const people = [
//     { name: 'João' },
//     { name: 'Maria' },
//     { name: 'Eduardo' },
//     { name: 'Luiza' },
// ];
// 
// const json = JSON.stringify(people, '', 2);
// write(filePath, json);


/* just reading the file and converting it to object */

async function readFile(path) {
    const data = await read(path);
    renderData(data);
}

function renderData(data){
    data = JSON.parse(data)
    data.forEach(val => console.log(val));
}

readFile(filePath)