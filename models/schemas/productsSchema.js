const { DataTypes } = require("sequelize");
const sequelize = require("../../common/dbconnection");
const products = sequelize.define(
  "products",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    productName: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    productTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);
module.exports = products;
