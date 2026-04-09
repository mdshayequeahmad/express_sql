const Student = require('./students');
const IdentityCard = require('./identityCard');
const department = require('./department');
const courses = require('./courses');
const studentCourses = require('./studentCourses');

//One to One
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

//One to Many
department.hasMany(Student);
Student.belongsTo(department);

//Many to Many
Student.belongsTo(courses, {through: studentCourses});
courses.belongsTo(Student, {through: studentCourses});

module.exports = {
    Student,
    IdentityCard,
    courses,
    studentCourses
};