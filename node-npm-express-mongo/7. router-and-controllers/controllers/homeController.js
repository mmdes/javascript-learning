exports.homePage = (req, res) => {
    res.send(`<form action="/" method="POST"> 
    Name: <input type="text" name="name">
    <button>Send</button>
    </form>`);
}

exports.handlePost = (req, res) => {
    res.send('ei, sou sua nova rota de POST');
}