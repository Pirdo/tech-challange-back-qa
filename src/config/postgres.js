const { Sequelize } = require('sequelize');

const {
    POSTGRE_HOST,
    POSTGRE_PORT,
    POSTGRE_DATABASE,
    POSTGRE_USERNAME,
    POSTGRE_PASSWORD,
} = process.env;

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: POSTGRE_HOST,
    port: POSTGRE_PORT,
    database: POSTGRE_DATABASE,
    username: POSTGRE_USERNAME,
    password: POSTGRE_PASSWORD,
    logging: false,
});

module.exports = sequelize;
