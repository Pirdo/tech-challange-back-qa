const express = require('express');
// const routes = require('./src/routes');
const helmet = require('helmet');

const app = express();

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(routes);

module.exports = app;
