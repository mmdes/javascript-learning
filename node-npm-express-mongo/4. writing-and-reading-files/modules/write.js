const fs = require('fs').promises;
const path = require('path');


//const filePath = path.resolve(__dirname, '..', 'test.txt')

// fs.writeFile(filePath, 'Sentence 1 \n', { flag: 'a', encoding: 'utf8' });

/* creating json file */

// const filePath = path.resolve(__dirname, '..', 'test.json')
// 
// const people = [
//     { name: 'João' },
//     { name: 'Maria' },
//     { name: 'Eduardo' },
//     { name: 'Luiza' },
// ];
// 
// const json = JSON.stringify(people, '', 2);
// 
// fs.writeFile(filePath, json, { flag: 'w'});

module.exports = (path, data) => {
    fs.writeFile(path, data, { flag: 'w' });
};