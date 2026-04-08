const Student = require('./students');
const IdentityCard = require('./identityCard');
const department = require('./department');

//One to One
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

//One to Many
department.hasMany(Student);
Student.belongsTo(department);

module.exports = {
    Student,
    IdentityCard
};