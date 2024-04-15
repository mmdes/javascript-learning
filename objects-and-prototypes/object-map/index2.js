
const pessoas = [
    { id: 3, nome: 'Helena' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Luiz' }
]


const novasPessoas = new Map()
for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}


console.log(novasPessoas);

// como obter os valores usando o Map

console.log(novasPessoas.get(3))

