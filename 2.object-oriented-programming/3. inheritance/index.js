/*
    Implementar uma classe para Dispositivo Eletronico que tem os atributos
    nome e ligado (boolean)

    Implementar uma classe Smartphone que vai herdar da classe Dispositivos Eletrônicos e terá
    seus próprios atributos que são cor e modelo

    Usar extends e super por exemplo...

*/

class DispositivoEletronico{

    constructor(nome){

        this.nome = nome;
        this.ligado = false;

    }

    ligar(){
        if(this.ligado) return;
        this.ligado = true; 
        console.log('ligado');
    }

    desligar(){
        if(!this.ligado) return;
        this.ligado = false;
        console.log('desligado');
    }

}

class Smartphone extends DispositivoEletronico{

    constructor(nome, cor, modelo){
        super(nome)
        this.cor = cor;
        this.modelo = modelo;
    }

}


/* principal */

de1 = new DispositivoEletronico('ar-condicionado')

de1.ligar()

de1.desligar()


s1 = new Smartphone('Smartphone', 'Preto', 'Galaxy s23')

s1.ligar()

s1.desligar()
