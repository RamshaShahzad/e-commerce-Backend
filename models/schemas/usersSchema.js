const { DataTypes } = require("sequelize");
const sequelize = require("../../common/dbconnection");
const users = sequelize.define(
  "users",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);
module.exports = users;
