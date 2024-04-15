/* como trabalhar no proto de uma funcao normal? */
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        falar(){
            console.log(this.nome + " está falando...");
        },
        beber(){
            console.log(this.nome + " está bebendo...")
        },
        comer(){
            console.log(this.nome + " está comendo...")
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');

console.log(p1)

p1.falar();
p1.beber();
p1.comer();

/* o problema disso é que consume muitos recuros pois os métodos não estão acoplados ao prototype */

/* a maneira correta de se fazer isso está no index2.js */
