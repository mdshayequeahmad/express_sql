const express = require('express');
const coursesController = require('../controller/coursesController');
const router = express.Router();

router.post('/addcourses', coursesController.addCourse);
router.post('/addStudentCourses', coursesController.addStudentsToCourses);

module.exports = router;