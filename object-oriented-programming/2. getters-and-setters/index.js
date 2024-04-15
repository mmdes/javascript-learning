/* 
    -   tenho um carro cujos atributos são nome e velocidade
    -   com esse carro, posso acelerar e freiar 
    -   a velocidade inicial do veículo é obviamente 0 
    -   a velocidade máxima que um carro pode chegar é a 100 km/h

    construir uma representação dele usando POO
*/


const _velocidade = Symbol('velocidade') // a dúvida desta aula é saber usar isso aqui da melhor forma possível, pesquisando a respeito 

class Carro {
    
    constructor(nome){

        this.nome = nome;
        this[_velocidade] = 0;

    }

    set velocidade(valor){

        if(typeof valor !== 'number') return;
        if(valor >= 100) return;
        if(valor <= 0) return;
        this[_velocidade] = valor;
    }


    get velocidade(){

         return `a velocidade atual é de ${this[_velocidade]} km/h`;

    }

    acelerar(){
        
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
        console.log(`a velocidade atual após ACELERAR é de ${this[_velocidade]} km/h`);

    }

    frear(){

        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
        console.log(`a velocidade atual após FREAR é de ${this[_velocidade]} km/h`); 

    }
}


ca = new Carro('fusca')
ca.acelerar()
ca.frear()
// usando método setter
ca.velocidade = 50
//usando método getter
console.log(ca.velocidade)


/* Consolidar o porque de usar o método setter e getter aqui */ 