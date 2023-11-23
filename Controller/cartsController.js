const cartsService = require("../Service/cartsService");
const { models } = require("../models");

module.exports = {
  getCart: async (req, res) => {
    const cart = await cartsService.getCart();
    res.send(cart);
  },
  createCartById: async (req, res) => {
    const cartdetail = await cartsService.createCartById(req.params.id);
    res.send(cartdetail);
  },
  deleteCart: async (req, res) => {
    const cartId = req.params.id;

    const deleteResult = await cartsService.deleteCart(cartId);
    console.log(deleteResult);

    if (deleteResult) {
      console.log("Deleted");
      return res.send("cart Deleted Successfully");
    } else {
      return res.status(404).send("cart not found");
    }
  },
};
