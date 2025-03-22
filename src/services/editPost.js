const { logger } = require('../utils');
const { PostModel } = require('../models');

const editPost = (postData) => {
    logger.info('Creating a new Post');
    return PostModel.update(postData, { where: { id: postData.id } }).catch(
        (err) => {
            throw new Error(err);
        }
    );
};

module.exports = editPost;
