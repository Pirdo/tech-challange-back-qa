const { logger } = require('../utils');
const { PostModel } = require('../models');

const createPost = (postData) => {
    logger.info('Creating a new Post');
    return PostModel.create(postData).catch((err) => {
        throw new Error(err);
    });
};

module.exports = createPost;
