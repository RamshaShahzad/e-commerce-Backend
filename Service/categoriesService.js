const { models } = require("../models/index");

module.exports = {
  getAllCategories: async () => {
    const category = await models.categories.findAll();
    return category;
  },
  createCategory: async (data) => {
    const category = await models.categories.create(data);
    return category;
  },
};
