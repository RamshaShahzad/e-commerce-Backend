const Joi = require("joi");

module.exports = {
  createProduct: Joi.object().keys({
    id: Joi.number(),
    productName: Joi.string(),
    productTitle: Joi.string(),
    productImage: Joi.string(),
    productDescription: Joi.string(),
    categoryId: Joi.number(),
  }),
  deleteProduct: Joi.object().keys({
    id: Joi.number().required(),
  }),
  updateProduct: Joi.object().keys({
    id: Joi.number().required(),
    productName: Joi.string(),
    productTitle: Joi.string(),
    productImage: Joi.string(),
    productDescription: Joi.string(),
  }),
};
