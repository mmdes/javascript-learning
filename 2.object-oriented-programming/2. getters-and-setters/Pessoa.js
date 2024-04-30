/*
    fazer o exemplo da aula anterior de classes, mas agora usando os métodos setters e getters,
    mas neste caso fazer um getter e um setter sendo o setter adicionando nome e sobrenome
*/


class Pessoa{
    
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(nome_completo){
        nome_completo = nome_completo.split(' ');
        this.nome = nome_completo.shift();
        this.sobrenome = nome_completo.join(' ');
    }

}

n1 = new Pessoa('Matheus', 'Matos');
console.log(n1.nomeCompleto);

n1.nomeCompleto= 'Matheus Matos de Souza'

console.log(n1.nomeCompleto);