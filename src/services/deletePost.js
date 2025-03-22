const { logger } = require('../utils');
const { PostModel } = require('../models');

const deletePost = (postId) => {
    logger.info('Deleting a Post');
    return PostModel.destroy({ where: { id: postId } }).catch((err) => {
        throw new Error(err);
    });
};

module.exports = deletePost;
