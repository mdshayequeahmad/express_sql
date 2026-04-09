const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const cources = sequelize.define('cources', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
});

module.exports = cources;