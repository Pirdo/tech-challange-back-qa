const { logger } = require("../utils");
const { User } = require("../models");

const registerUser = (userData) => {
  logger.info("Registering a User");
  return User.create(userData).catch((err) => {
    throw new Error(err);
  });
};

module.exports = registerUser;
