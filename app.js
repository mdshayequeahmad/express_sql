const express = require('express');
const db = require('./utils/db-connection');
const studentsRoutes = require('./routes/studentsRoutes');
const app = express();

const studentModel = require('./models/students');
require('./models');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/students', studentsRoutes);

db.sync({ force: false, alter: false }).then(() => {
    app.listen(3000, (err) => {
        console.log(`Server is running`);
    });
}).catch((err) => {
    console.log(err);
});