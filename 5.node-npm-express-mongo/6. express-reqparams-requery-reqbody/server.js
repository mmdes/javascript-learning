const express = require('express');
const app = express()
// to use post
app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.get('/', (req, res) => {
    res.send(`<form action="/" method="POST"> 
    Name: <input type="text" name="name">
    <button>Send</button>
    </form>`);
});

// params
app.get('/test/:idUsuarios?/:parametro?', (req, res) => { // if we put ? it is optional to bring a param
    console.log(req.params); //return an object
    res.send(req.params);
});

// query strings
app.get('/test2/', (req, res) => {
    console.log(req.query);
    res.send(req.query);
});


app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`This is what I sent: ${req.body.name}`);
});

app.listen(3000, () => {
    console.log('Server is running at port 3000');
    console.log('Access http://localhost:3000/');
});
