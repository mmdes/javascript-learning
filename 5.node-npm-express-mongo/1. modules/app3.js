const multiplication = require('./mod3.js')

console.log(multiplication(2, 2))

// to manipulate paths

// console.log(__filename);
// console.log(__dirname);

const path = require('path');

// usar esse módulo pois facilita 
console.log(path.resolve('__dirname', '..','..', 'node-npm-express-mongo'))