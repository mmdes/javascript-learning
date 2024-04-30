// const mod1 = require('./mod1.js') // we use require to import the module
//const sayName = require('./mod1.js').sayName()


// importing by destructuring
const { _name, surname, sayName } = require('./mod1.js')

console.log(sayName())
