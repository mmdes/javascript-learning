function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string'){ 
            reject('caiu no erro')
            return
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 3000),
    esperaAi('Promise 3', 3000),
    'Outro valor'
]

// os métodos aprendidos são:
// Promise.all Promise.race Promise.resolve Promise.reject

//entrega todas de uma vez quando concluir todas
//Promise.all(promises)
//.then(function(valor){
//    console.log(valor);
//})
//.catch(function(erro){
//    console.log(erro)
//});



const promises2 = [
    esperaAi('Promise 1', 4000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 3000)
]

//entrega o primeiro a ser executado mas continua a execucao dos outros
// Promise.race(promises2)
// .then(function(valor){
//     console.log(valor);
// })
// .catch(function(erro){
//     console.log(erro)
// });


// usando Promise.resolve

function baixaPagina(){
    const emCache = true;
    if(emCache){
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('baixei a página', 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina)
})
.catch(e => console.log('ERRO', e))