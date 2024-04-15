class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando.`)
    }

    bebendo(){
        console.log(`${this.nome} está bebendo.`)
    }
    
    comendo(){
        console.log(`${this.nome} está comendo.`)
    }

}


const p1 = new Pessoa('Matheus', 'Matos de Souza');


p1.falar()
p1.bebendo()
p1.comendo()
