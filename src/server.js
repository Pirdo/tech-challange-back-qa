const express = require("express");
require("dotenv").config();
const helmet = require("helmet");
const cors = require("cors");

const { postsRoutes, userRoutes } = require("./api");

const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/posts", postsRoutes);
app.use("/users", userRoutes);

module.exports = app;
