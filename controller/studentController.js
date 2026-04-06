const db = require('../utils/db-connection');
const Students = require('../models/students');

const addEntries = async (req, res) => {
    try {
        const { email, name } = req.body;
        await Students.create({
            name: name,
            email: email,
        });

        res.status(200).send(`Student with name ${name} successfully added`);

    } catch (error) {
        res.status(500).send('Unable to make an entry!');
    }

}

const updateEntries = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const student = await Students.findByPk(id);
        if (!student) {
            res.status(404).send('User not found!')
        }
        student.name = name;
        await student.save();
        res.status(200).send('User has been updated!')
    } catch (error) {
        res.status(500).send('User can not be updated!');
    }

};

const deleteEntries = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Students.destroy({
            where: {
                id: id
            }
        });

        if (!student){
            res.status(404).send('User is not found!');
        }

        res.status(200).send('User is deleted!')
    } catch (error) {
        console.log(error);
        res.status(500).send('Error encountered while deleting!');
    }

}

const getAllEntries = async (req, res) => {
    try {
        const students = await Students.findAll();

        if (!students) {
            res.status(404).send('User not found!');
        }

        res.status(200).json(students);
    } catch (error) {
       res.status(500).send('Error encountered while fechting!');
    }
};

module.exports = {
    addEntries,
    updateEntries,
    deleteEntries,
    getAllEntries
}