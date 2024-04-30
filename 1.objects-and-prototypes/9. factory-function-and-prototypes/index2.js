function criaPessoa(nome, sobrenome){
    const pessoaPrototype = {
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
    return Object.create(pessoaPrototype, {
        nome:{
            value: nome
        },
        sobrenome:{
            value: sobrenome
        }
    });
}



const p1 =  criaPessoa('Matheus', 'Matos')

p1.falar()
p1.beber()
p1.comer()
