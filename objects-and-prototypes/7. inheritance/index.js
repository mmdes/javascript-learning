// imagina que irei fazer um sistema para o dono de um e-comerce
// o que vamos vender? camiseta, caneca, lapis 
// a abstracao pra isso anterior é um produto 
// coisas específicas de cada produto:
// camiseta: cor
// caneca: material

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco); // fazendo só isso aqui eu já linkei as duas funções
    this.cor = cor; 
};

// setando heranca dos metodos 

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const c1 = new Camiseta('Regata', 7.5, 'Preta');

console.log(c1)



// mais um exemplo de herança mas agora para Caneca que tem como diferencial o material

function Caneca(nome, preco, material, estoque){
    // pegando os atributos como heranca
    Produto.call(this, nome, preco);
    this.material;
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
// pegando os metodos a partir do proto
console.log('Caneca.prototype:');
console.log(Caneca.prototype);

Caneca.prototype = Object.create(Produto.prototype);

console.log('Caneca.prototype:');
console.log(Caneca.prototype);

// agora hora de adicionar o construtor certo
Caneca.prototype.constructor = Caneca;


console.log("######### INICIAL #########");

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preto');
const caneca = new Caneca('Caneca', 13, 'Plástico', 5)

console.log('\n\n\n');

console.log(produto);
console.log(caneca);
console.log(camiseta);




