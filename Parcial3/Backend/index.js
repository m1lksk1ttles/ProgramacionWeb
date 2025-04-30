//Esto va en Railway o algo asi

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.text());

app.get('/guitarras', (req,res) => {
    //Parametro de Cadena de Consulta
    console.log(req.query)
    console.log(req.query.id)
    res.send('Get. Server is running on port 3000');
});

app.post('/guitarras', (req,res) => {
    console.log(req.body);
    res.send('Post. Server is running on port 3000');
});

app.patch('/guitarras', (req,res) => {
    console.log(req.params);
    res.send('Patch. Server is running on port 3000');
});

app.delete('/guitarras', (req,res) => {
    console.log(req.params);
    res.send('Delete. Server is running on port 3000');
});

app.listen(3005, () =>{
    console.log('Listen. Server is running on port 3000');
});