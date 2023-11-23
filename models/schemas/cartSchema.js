const { DataTypes } = require("sequelize");
const sequelize = require("../../common/dbconnection");
const cart = sequelize.define(
  "cart",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    totalItems: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);
module.exports = cart;
