const express = require('express');
const { postsRoutes } = require('./api');
const helmet = require('helmet');

const app = express();

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/posts', postsRoutes);

module.exports = app;
