const { logger } = require('../utils');
const { PostModel } = require('../models');

const createPost = (postData) => {
    try {
        logger.info('Creating a new Post');
        return PostModel.create(postData).catch((err) => {
            throw new Error(err);
        });
    } catch (err) {
        logger.error(err);
    }
};

module.exports = createPost;
