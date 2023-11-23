const { DataTypes } = require("sequelize");
const sequelize = require("../../common/dbconnection");
const categories = sequelize.define(
  "categories",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);
module.exports = categories;
