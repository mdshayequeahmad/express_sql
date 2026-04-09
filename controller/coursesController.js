const Courses = require('../models/courses');
const Students = require('../models/students');
const { Op } = require("sequelize");

const addCourse = async (req, res) => {
    try {
        const { name } = req.body;
        const courses = await Courses.create({ 'name': name });

        res.status(201).json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addStudentsToCourses = async (req, res) => {
    try {
        const { studentsId, courseIds } = req.body;
        const student = await Students.findByPk(studentsId);
        const course = await Courses.findAll({
            where: {
                id: courseIds
            }
        });

        await student.addCourse(course);

        const updatedStudent = await Students.findByPk(studentsId, { include: Courses });

        res.status(201).json(updatedStudent);
    } catch (error) {
        res.status(500).send('Unable to add student to course!');
    }
};

module.exports = {
    addCourse,
    addStudentsToCourses
};