export const nome = 'Luiz';
const sobrenome = 'Miranda';
const idade = 30;

const x = 2
const y = 8

function soma(x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    };
};


export { soma };

