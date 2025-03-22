const express = require('express');
const router = express.Router();

const { createPost } = require('../services');

router.post('/create', async (req, res) => {
    const postData = req.body;

    const createResult = await createPost(postData);

    console.log(createResult);

    // hasError
    // res.status(400).send({ hasError, message, data })
    res.status(200).send(createResult);
});
