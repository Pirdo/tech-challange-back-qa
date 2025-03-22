const express = require('express');
const router = express.Router();

const { createPost } = require('../services');
const { logger } = require('../utils');

router.post('/create', async (req, res) => {
    try {
        const postData = req.body;

        const createResult = await createPost(postData);

        res.status(200).send({
            hasError: false,
            message: 'Successfully created a new post',
            data: createResult,
        });
    } catch (err) {
        logger.error(err);
        res.status(400).send({
            hasError: true,
            message: 'An error occured when trying to create a new post',
        });
    }
});

module.exports = router;
