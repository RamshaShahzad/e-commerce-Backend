const Joi = require("joi");

module.exports = {
  createUser: Joi.object().keys({
    id: Joi.number(),
    userName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
  deleteUser: Joi.object().keys({
    id: Joi.number().required(),
  }),
  updateUser: Joi.object().keys({
    id: Joi.number().required(),
    userName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};
