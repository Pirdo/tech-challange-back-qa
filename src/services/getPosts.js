const { Op } = require('sequelize');

const { logger } = require('../utils');
const { PostModel } = require('../models');

const getPosts = (filterLast) => {
    logger.info('Pulling all Posts');
    return PostModel.findAll(
        filterLast
            ? {
                  where: {
                      createdAt: {
                          [Op.gte]: new Date().setDate(
                              new Date().getDate() - 5
                          ),
                      },
                  },
              }
            : undefined
    ).catch((err) => {
        throw new Error(err);
    });
};

module.exports = getPosts;
