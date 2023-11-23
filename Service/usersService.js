const { models } = require("../models/index");
const bcrypt = require("bcryptjs");
module.exports = {
  getUsers: async () => {
    const user = await models.users.findAll();
    return user;
  },
  createUser: async (data) => {
    data.password = bcrypt.hashSync(data.password, 10);
    const userData = await models.users.create(data);
    return userData;
  },
  updateUser: async (body) => {
    if (!body.id) {
      throw new Error("User ID is required for updating.");
    }

    const { id, ...param } = body;

    try {
      const result = await models.users.update(
        { ...param },
        {
          where: {
            id: body.id,
          },
        }
      );

      if (result[0] === 1) {
        return "User updated successfully"; // You can return any appropriate success message
      } else {
        throw new Error("User not found or update failed");
      }
    } catch (error) {
      throw error;
    }
  },

  deleteUser: async (query) => {
    const result = await models.users.destroy({
      where: {
        id: query,
      },
    });
    return result;
  },
};
