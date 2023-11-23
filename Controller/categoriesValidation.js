const Joi = require("joi");

module.exports = {
  createProduct: Joi.object().keys({
    id: Joi.number(),
    categoryName: Joi.string(),
  }),
  deleteProduct: Joi.object().keys({
    id: Joi.number().required(),
  }),
  updateProduct: Joi.object().keys({
    id: Joi.number().required(),
    categoryName: Joi.string(),
  }),
};
