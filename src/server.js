const express = require('express');
require('dotenv').config();
const helmet = require('helmet');

const { postsRoutes, userRouts } = require('./api');

const app = express();

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/posts', postsRoutes);
app.use('/users', userRouts);

module.exports = app;
