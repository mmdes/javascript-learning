
function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: false, // permite ou não alterar o valor
        configurable: false // redefinir ou nao a propriedade posteriormente 
    });

  Object.defineProperties(this,{
    nome:{
        enumerable: true, // mostra a chave
        value: nome, // valor da chave
        writable: false, // permite ou não alterar o valor
        configurable: false // redefinir ou nao a propriedade posteriormente
    },
    preco:{
        enumerable: true, // mostra a chave
        value: preco, // valor da chave
        writable: false, // permite ou não alterar o valor
        configurable: false // redefinir ou nao a propriedade posteriormente
    },
  });

}

const p1 = new Produto('Camiseta', 20, 3);

console.log(p1);

console.log("Iterando no objeto p1:")
for (let chave in p1){
    console.log(chave)
}