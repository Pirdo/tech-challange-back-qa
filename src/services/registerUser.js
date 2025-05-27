const { logger } = require('../utils');
const { UserModel } = require('../models');

const registerUser = (userData) => {
    logger.info('Registering a User');
    return UserModel.create(userData).catch((err) => {
        throw new Error(err);
    });
};

module.exports = registerUser;
