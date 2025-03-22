const { logger } = require('../utils');
const { PostModel } = require('../models');

const getOnePost = (postId) => {
    logger.info('Pulling a Post');
    return PostModel.findByPk(postId).catch((err) => {
        throw new Error(err);
    });
};

module.exports = getOnePost;
