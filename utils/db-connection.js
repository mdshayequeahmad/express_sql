const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql123',
    database: 'testdb'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connection has been created');

    const creationQuery = `CREATE TABLE IF NOT EXISTS Students (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(20),
        email VARCHAR(30)
        )`

    connection.execute(creationQuery, (err) => {
        if (err) {
            console.log(err);
            connection.end();
            return;
        }

        console.log('Table is created');
    });
});

module.exports = connection;