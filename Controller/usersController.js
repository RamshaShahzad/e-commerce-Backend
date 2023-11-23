const usersService = require("../Service/usersService");
const usersValidation = require("./usersValidation");
module.exports = {
  getUsers: async (req, res) => {
    const user = await usersService.getUsers();
    return res.send(user);
  },
  createUser: async (req, res) => {
    try {
      const { error, value } = usersValidation.createUser.validate(req.body);
      console.log(error);
      if (error) {
        return res.send(error.details[0].message);
      }
      const data = req.body;
      const newUser = await usersService.createUser(data);
      if (newUser) {
        return res.status(201).send(newUser);
      } else {
        return res.status(500).send("User creation failed");
      }
    } catch (err) {
      return res.status(500).send(err.message); // Internal Server Error
    }
  },

  updateUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const data = req.body;
      const { error, value } = usersValidation.updateUser.validate(
        { ...data, id: userId },
        { abortEarly: false }
      );

      if (error) {
        return res.status(400).send(error.details[0].message); // 400 Bad Request
      }

      const updatedUserData = await usersService.updateUser({
        ...value,
        userId,
      });
      console.log(updatedUserData);
      if (updatedUserData) {
        return res.send(updatedUserData);
      } else {
        return res.status(404).send("User not found"); // 404 Not Found
      }
    } catch (err) {
      return res.status(500).send(err.message); // 500 Internal Server Error
    }
  },
  deleteUser: async (req, res) => {
    try {
      // Validate the "id" parameter using userValidation.deleteusers.validate
      const { error, value } = usersValidation.deleteUser.validate(
        { id: req.params.id },
        { abortEarly: false }
      );

      if (error) {
        // If validation fails, return a 400 Bad Request response with the first validation error message
        return res.status(400).send(error.details[0].message);
      }

      // Validation passed; proceed with user deletion
      const userId = req.params.id;
      const deleteResult = await usersService.deleteUser(userId);
      console.log(deleteResult);
      if (deleteResult) {
        console.log("Deleted");
        // User was successfully deleted; return a 204 No Content response
        return res.send("User Deleted Sucsesfully");
      } else {
        // User not found; return a 404 Not Found response
        return res.status(404).send("User not found");
      }
    } catch (err) {
      // Handle unexpected errors (e.g., server/database errors)
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  },
};
