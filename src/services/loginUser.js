const { logger } = require('../utils');
const { UserModel } = require('../models');

const loginUser = (username, password) => {
    logger.info('Getting a User');
    return UserModel.findOne({
        where: { user: username, password: password },
    }).catch((err) => {
        throw new Error(err);
    });
};

module.exports = loginUser;
