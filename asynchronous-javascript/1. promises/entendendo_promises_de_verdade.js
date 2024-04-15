const myPromise = new Promise((resolve, reject)=>{

    const nome = "Matheus"

    if (nome === "Matheus"){
        resolve('Usuário Matheus encontrado!')
    } else {
        reject('O usuário encontrado não é o Matheus!')
    }
    

});


myPromise.then((data)=>{
    return data.toLowerCase()
})
.then((stringModificada)=>{
    console.log(stringModificada)
})


// Retorno do reject

const myPromise3 = new Promise((resolve, reject)=>{
    const nome = "João"

    if (nome === "Matheus"){
        resolve('Usuário Matheus encontrado!')
    } else {
        reject('O usuário encontrado não é o Matheus!')
    }
    
})

myPromise3.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('Aconteceu um erro: ' + err) // com catch posso continuar o fluco do código
})

