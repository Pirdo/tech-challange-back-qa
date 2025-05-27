const { DataTypes } = require('sequelize');
const { postgresConn } = require('../config');

const User = postgresConn.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = User;
