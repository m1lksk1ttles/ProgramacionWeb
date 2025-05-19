const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'C22100440',
  port: 3306
});

// A simple SELECT query
connection.query(
    'SELECT * FROM guitarras',
    function(err,results,fields)
    {
    console.log(results);
}

);
