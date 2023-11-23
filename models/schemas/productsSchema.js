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
    title: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // category: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    rating: {
      type: DataTypes.JSON,
      rate: {
        type: DataTypes.FLOAT,
      },
      count: {
        type: DataTypes.INTEGER,
      },
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);
module.exports = products;
