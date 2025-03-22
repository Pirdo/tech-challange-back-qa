const { Op } = require('sequelize');

const { logger } = require('../utils');
const { PostModel } = require('../models');

const searchPost = (keywords) => {
    logger.info('Searching for the Posts');
    return PostModel.findAll({
        where: {
            [Op.or]: keywords.map((kw) => ({
                [Op.or]: [
                    { titulo: { [Op.iLike]: `%${kw}%` } },
                    { conteudo: { [Op.iLike]: `%${kw}%` } },
                ],
            })),
        },
    }).catch((err) => {
        throw new Error(err);
    });
};

module.exports = searchPost;
