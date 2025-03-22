const express = require('express');
const router = express.Router();

const {
    createPost,
    getOnePost,
    getPosts,
    editPost,
    deletePost,
    searchPost,
} = require('../services');
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

router.get('/last5', async (req, res) => {
    try {
        const getResult = await getPosts(true);

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

router.put('/edit/:id', async (req, res) => {
    try {
        const editData = { ...req.body, id: req.params.id };

        const editResult = await editPost(editData);

        res.status(200).send({
            hasError: false,
            message: 'Successfully edited the post',
            data: editResult,
        });
    } catch (err) {
        logger.error(err);
        res.status(400).send({
            hasError: true,
            message: 'An error occured when trying to edit the post',
        });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deleteResult = await deletePost(id);

        res.status(200).send({
            hasError: false,
            message: 'Successfully deleted the post',
            data: deleteResult,
        });
    } catch (err) {
        logger.error(err);
        res.status(400).send({
            hasError: true,
            message: 'An error occured when trying to delete the post',
        });
    }
});

router.get('/search', async (req, res) => {
    try {
        const { keyword } = req.query;

        const keywords = keyword.split(' ').map((k) => k.trim());

        const searchResult = await searchPost(keywords);

        res.status(200).send({
            hasError: false,
            message: 'Successfully searched for the posts',
            data: searchResult,
        });
    } catch (err) {
        logger.error(err);
        res.status(400).send({
            hasError: true,
            message: 'An error occured when trying to search for the posts',
        });
    }
});

module.exports = router;
