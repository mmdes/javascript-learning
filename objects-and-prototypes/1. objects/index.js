const p1 = new Object();

p1.nome = "Matheus";
p1['sobrenome'] = "Matos de Souza";
p1.anoNascimento = 1997;

p1.getNome = function(){
    return this.nome;
}

p1.getIdade = function(){
    const dataAtual = new Date();

    return dataAtual.getFullYear() - this.anoNascimento
}


console.log('O sobrenome em p1 é '+ p1.sobrenome)

//console.log(p1.getNome())

//console.log(p1.getIdade())



/* factory function */

function criaPessoa(nome,sobrenome){
return {
    nome,
    sobrenome,
    get nomeCompleto(){  /* neste caso, se quiser não é preciso declarar o get */
        return `${this.nome} ${this.sobrenome}`;
    }
};
}

const p2 = criaPessoa('Matheus', 'Matos de Souza')

console.log(p2.nomeCompleto)


/*  constructor functios  */ 

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p3 = new Pessoa('Matheus','Matos de Souza'); // essa new cria um objeto vazio
console.log(p3) // o que nós temos aqui é a mesma coisa de um objeto literal