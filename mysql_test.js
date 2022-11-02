const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    database : 'mydatabase',
    password : '1234'
});

let person = {
    name : "Sally",
    age : 30
}

connection.execute(
    "SELECT * FROM person",
    function(err, results, fields){
        console.log(results)
    }
)

// connection.execute(
//     "INSERT INTO person (name, age) VALUES (?, ?)",
//     [person.name, person.age],
//     function(err, results, require){
//         console.log(results);
//     }
// )

connection.execute(
    "INSERT INTO person (name, age) VALUES('John', 20)",
    function (err, results, fields){
        console.log(results);
    }
)

// connection.execute(
//     "SELECT 1+1 FROM dual",
//     function(err, results, fields){
//         console.log(results)
//     }

// )