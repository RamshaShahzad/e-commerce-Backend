const { models } = require("../models/index");

module.exports = {
  getAllProducts: async () => {
    const products = await models.products.findAll();
    return products;
  },
  getProductById: async (value) => {
    const productId = await models.products.findByPk(value);

    return productId;
  },
  createProduct: async (data) => {
    const product = await models.products.create(data);
    return product;
  },
  updateProduct: async (body) => {
    if (!body.id) {
      throw new Error("Product ID is required for updating.");
    }

    const { id, ...param } = body;

    try {
      const result = await models.products.update(
        { ...param },
        {
          where: {
            id: body.id,
          },
        }
      );

      if (result[0] === 1) {
        return "Product updated successfully"; // You can return any appropriate success message
      } else {
        throw new Error("Product not found or update failed");
      }
    } catch (error) {
      throw error;
    }
  },
  deleteProduct: async (query) => {
    const result = await models.products.destroy({
      where: {
        id: query,
      },
    });
    return result;
  },
};
