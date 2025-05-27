const { logger } = require("../utils");
const { User } = require("../models");

const loginUser = (username) => {
  logger.info("Getting a User");
  return User.findOne({
    where: { user: username },
  }).catch((err) => {
    throw new Error(err);
  });
};

module.exports = loginUser;
