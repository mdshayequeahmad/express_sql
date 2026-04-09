const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const studentCources = sequelize.define('studentCources', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }

});

module.exports = studentCources;