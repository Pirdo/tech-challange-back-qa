const express = require('express');
const router = express.Router();

const { loginUser, registerUser } = require('../services');
const { logger } = require('../utils');

router.post('/register', async (req, res) => {
    try {
        const userData = req.body;

        const registerResult = await registerUser(userData);

        res.status(200).send({
            hasError: false,
            message: 'Successfully registered',
            data: registerResult,
        });
    } catch (err) {
        logger.error(err);
        res.status(400).send({
            hasError: true,
            message: 'An error occured when trying to register the user',
        });
    }
});

router.get('/login', async (req, res) => {
    try {
        const { user, password } = req.query;

        const loginResult = await loginUser(user, password);

        res.status(200).send({
            hasError: false,
            message: 'Successfully loged in',
            data: loginResult,
        });
    } catch (err) {
        logger.error(err);
        res.status(400).send({
            hasError: true,
            message: 'An error occured when trying to login',
        });
    }
});

module.exports = router;
