/* DESPITE ALL MY RAGE
IM STILL JUST A RAT IN A CAGE*/

const mysql = require('mysql2');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.text());

const connection = mysql.createConnection({
        host:'localhost',
        port:3306,
        user:'root',
        password:'NRJgg9876$',
        database:'c22100440'
})

app.get('/guitarras', (req, res) => {
    connection.query('SELECT * FROM guitarras', (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).send('Error en el servidor');
        } else {
            res.json(results);
        }
    });
});


     
app.listen(3000, () =>{
    console.log('API alla anda en http://localhost:3000');
})



