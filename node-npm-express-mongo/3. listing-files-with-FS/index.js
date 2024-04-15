const fs = require('fs').promises;

const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (let file of files) {
        let fileFullPath = path.resolve(rootDir, file);
        let stats = await fs.stat(fileFullPath);
        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue; //recursividade
        }
        console.log(fileFullPath, stats.isDirectory());
    }
}


readdir('C:\\Users\\mathe\\OneDrive\\Documentos\\javascript\\object-oriented-programming\\proj-validando_formulario')