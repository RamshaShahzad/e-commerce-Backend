var express = require("express");
var router = express.Router();
const usersController = require("../Controller/usersController");
const authenticationController = require("../Controller/common/authenticationController");
/* GET users listing. */

router.post("/login", authenticationController.login);
router.get(
  "/getUsers",
  authenticationController.verifyToken,
  usersController.getUsers
);
router.post("/createUser", usersController.createUser);
router.put("/updateUser/:id", usersController.updateUser);
router.delete("/deleteUser/:id", usersController.deleteUser);

module.exports = router;
