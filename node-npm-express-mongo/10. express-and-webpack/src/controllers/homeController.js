exports.homePage = (req, res) => {
    res.render('index');
}

exports.handlePost = (req, res) => {
    res.send('ei, sou sua nova rota de POST');
}