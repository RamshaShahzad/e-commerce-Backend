const { models } = require("../models/index");

module.exports = {
  getCart: async () => {
    const cart = await models.cart.findAll();
    return cart;
  },
  createCartById: async (value) => {
    const cartId = await models.cart.findByPk(value);
    return cartId;
  },

  deleteCart: async (query) => {
    const result = await models.cart.destroy({
      where: {
        id: query,
      },
    });
    return result;
  },
};
