const express = require('express');
const cors = require('cors');
require('dotenv').config();
const helmet = require('helmet');

const { postsRoutes, userRouts } = require('./api');

const app = express();

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/posts', postsRoutes);
app.use('/users', userRouts);

module.exports = app;
