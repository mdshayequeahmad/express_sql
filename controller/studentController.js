const db = require('../utils/db-connection');

const addEntries = (req, res) => {
    const {email, name} = req.body;
    const insertQuary = `INSERT INTO Students (name, email) VALUES (?, ?)`;

    db.execute(insertQuary, [email, name], (err) => {
        if (err) {
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        
        console.log('value has been inserted');
        res.status(200).send(`Student with name ${name} successfully added`);
    });
}

const updateEntries = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const updateQuary = 'UPDATE Students SET name= ? WHERE id= ?';

    db.execute(updateQuary, [name, id], (err, result) => {
        if (err) {
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        if (result.affectedRows === 0) {
            res.status(404).send('Student not found!');
            return;
        }

        res.status(200).send('Student has been updated!');
    });
};

const deleteEntries = (req, res) => {
    const {id} = req.params;
    const deleteQuary = 'DELETE FROM Students WHERE id= ?';

    db.execute(deleteQuary, [id], (err, result) => {
        if (err) {
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        if (result.affectedRows === 0) {
            res.status(404).send('Student not found!');
            return;
        }

        res.status(200).send(`User with ${id} is deleted!`);
    });
}

module.exports = {
    addEntries,
    updateEntries,
    deleteEntries
}