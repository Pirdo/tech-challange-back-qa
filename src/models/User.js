const { DataTypes } = require("sequelize");
const { postgresConn } = require("../config");

const User = postgresConn.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.INTEGER },
});

module.exports = User;
