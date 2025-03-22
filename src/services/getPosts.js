const { logger } = require('../utils');
const { PostModel } = require('../models');

const getPosts = () => {
    logger.info('Pulling all Posts');
    return PostModel.findAll().catch((err) => {
        throw new Error(err);
    });
};

module.exports = getPosts;
