// como copiar objeto 

const produto = {nome: 'Caneca', preco: 1.8}
const outraCoisa = produto; // iguala somente referencia 

produto.nome = 'Luiz Otávio'; 

console.log(outraCoisa) 


// copiando de verdade 


const produto1 = {nome: 'Caneca', preco: 1.8}
const outraCoisa1 = {... produto1, material: 'porcelana'}; // operador de propagação
produto1.nome = 'Luiz Otávio'; 

console.log(outraCoisa1) 


// outra maneira de realizar a copia 

const produto3 = {nome: 'Produto', preco: 1.8}
const caneca = Object.assign({}, produto3);

console.log('Caneca: ')
console.log(caneca)

// como verificar propriedades ?
console.log('Descrição das propriedades do objeto: ')
console.log(Object.getOwnPropertyDescriptor(produto3, 'nome'))



/* ver também  */


// Object.values
// Object.entries
// Object.freeze 
// Object.keys