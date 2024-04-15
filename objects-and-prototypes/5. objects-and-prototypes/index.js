/*
    todo objeto referencia um _proto_

*/

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + '' +this.sobrenome;
}

/* evita ficar redefinindo os métodos todas as vezes que um objeto for instanciado */


Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
}



const p1 = new Pessoa('Matheus', 'Matos')
const data = new Date()

console.log(p1.nomeCompleto())