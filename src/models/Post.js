const { DataTypes } = require('sequelize');
const { postgresConn } = require('../config');

const Post = postgresConn.define('Post', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    titulo: { type: DataTypes.STRING, allowNull: false },
    conteudo: { type: DataTypes.STRING, allowNull: false },
    autor: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Post;
