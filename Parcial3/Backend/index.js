//Esto va en Railway o algo asi

const express = require('express');
const app = express();

app.get('/guitarras', (req,res) => {
    res.send('Hello World!');
});

app.post('/guitarras', (req,res) => {
    res.send('Hello World!');
});

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});