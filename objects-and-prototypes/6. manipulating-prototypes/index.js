


const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};


Object.setPrototypeOf(objB, objA);


/* acessei a chave A pelo objB após realizar op anterior */
console.log(objB.chaveA)

// tem como fazer uma corrente com os _protos_

/*  com funcoes construtoras  */

function Produto(nome, preco){
    this.nome = nome;
    this.preco  = preco;
};

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco*(percentual/100));
};

Produto.prototype.aumenta = function(percentual){
    this.preco = this.preco + (this.preco*(percentual/100));
};

const p1 = new Produto('Camiseta', 100);

const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);

p1.aumenta(10)
console.log('Esse é o preco de p1: ' + p1.preco)

//aumentando o preco da caneca (lembrando que nao tinhamos os metodos de aumentar implementados para p2)
p2.aumenta(15)
console.log('Esse é o preco de p2: ' + p2.preco)


// já criando um objeto e setando o prototype dele já de cara


const p3 = Object.create(Produto.prototype);
p3.preco = 13;
console.log(p3);


