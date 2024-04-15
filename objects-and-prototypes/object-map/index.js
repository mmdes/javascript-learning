
const pessoas = [
    { id: 3, nome: 'Helena' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Luiz' }
]

// quero tranformar em um objeto cujo os ids sao as chaves

const novasPessoas = {}
// sintaxe de desestruturalização
for ( const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas[id] = {...pessoa};
}

console.log(novasPessoas)


