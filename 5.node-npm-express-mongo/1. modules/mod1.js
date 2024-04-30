const _name = 'Matheus'
const surname = 'Matos de Souza'

const sayName = () => {
    return _name + ' ' + surname
};

// exporting the value of the key to the object exports in module
module.exports._name = _name;
module.exports.sayName = sayName;
//shortcut that I can use. It means the same as module.exports
exports.surname = surname;
// 'this' refers to 'exports' 
this.anything = 'anything'


// console.log(module.exports)