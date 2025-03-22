const { logger } = require('../utils');
const { PostModel } = require('../models');

const getOnePost = (postId) => {
    try {
        logger.info('Creating a new Post');
        return PostModel.findByPk(postId).catch((err) => {
            throw new Error(err);
        });
    } catch (err) {
        logger.error(err);
    }
};

module.exports = getOnePost;
