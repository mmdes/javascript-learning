// gerar número aleatório a partir de um máximo e um mínimo
function rand(min, max) {
    // convertendo de segundos para milissegundos
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// após um determinado tempo exibirá uma mensagem
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
       if (typeof msg !== 'string') reject(new Error());
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', rand(1, 3))
    .then((resposta) => {
        console.log(resposta);
        return esperaAi('Frase 2', rand(1, 3));
    })
    .then((resposta) => {
        console.log(resposta);
        return esperaAi(123, rand(1, 3));
    })
    .then((resposta) => {
        console.log(resposta)
    })
    .catch((e)=>{
        console.log('ERRO', e)
    })

console.log('Esse é um código assíncrono')