const cart = require("./schemas/cartSchema");
const categories = require("./schemas/categoriesSchema");
const products = require("./schemas/productsSchema");
const user = require("./schemas/usersSchema");
const sequelize = require("../common/dbconnection");

const models = sequelize.models;
console.log(models);
// `users` (one-to-many with `carts`): Store user information, including username, email, and
// password (encrypted).
//    - `categories` (one-to-many with `products`): Store product categories.
//    - `products` (many-to-many with `carts`): Store product details, including name, description,
// price, and inventory.
//    - `carts` : Store cart information for each user

// one to many

user.hasMany(cart, { onDelete: "CASCADE", foreignKey: { name: "userID" } });
cart.belongsTo(user, { onDelete: "CASCADE", foreignKey: { name: "userID" } });

categories.hasMany(products, {
  onDelete: "CASCADE",
  foreignKey: { name: "categoryID" },
});
products.belongsTo(categories, {
  onDelete: "CASCADE",
  foreignKey: { name: "categoryID" },
});

products.belongsToMany(cart, {
  through: "product_cart",
  foreignKey: { name: "productID" },
});
cart.belongsToMany(products, {
  through: "product_cart",
  foreignKey: { name: "cartID" },
});

module.exports = { sequelize, models };
