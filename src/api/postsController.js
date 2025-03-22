const express = require('express');
const router = express.Router();

const { createPost, getOnePost, getPosts } = require('../services');
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

router.get('/getOne/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const getOneResult = await getOnePost(id);

        res.status(200).send({
            hasError: false,
            message: 'Successfully retrieved the data from the post',
            data: getOneResult,
        });
    } catch (err) {
        logger.error(err);
        res.status(400).send({
            hasError: true,
            message:
                'An error occured when trying to retrieve data from the post',
        });
    }
});

router.get('/', async (req, res) => {
    try {
        const getResult = await getPosts();

        res.status(200).send({
            hasError: false,
            message: 'Successfully pulled all posts',
            data: getResult,
        });
    } catch (err) {
        logger.error(err);
        res.status(400).send({
            hasError: true,
            message: 'An error occured when trying to pull all posts',
        });
    }
});

module.exports = router;
