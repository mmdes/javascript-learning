const HomeModel = require('../models/homeModel')

HomeModel.create({
    titulo: 'Um titulo de testes',
    descricao: 'Uma descricao de testes'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

exports.contactHomePage = (req, res) => {
    res.send('Welcome, this is the contact page');
    return;
};