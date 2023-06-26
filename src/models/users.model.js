const { DataTypes } = require("sequelize");
const { db } = require("../db/config");

const User = db.define("users", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  role: {
    allowNull: false,
    type: DataTypes.ENUM("normal", "admin"),
    defaultValue: "normal",
  },
});

module.exports = User;
