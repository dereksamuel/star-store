const { User, UsersSchema } = require("./user.model");
const { Product, ProductsSchema } = require("./product.model");

function setupModels(sequelize) {
  User.init(UsersSchema, User.config(sequelize));
  Product.init(ProductsSchema, Product.config(sequelize));
}

module.exports = {
  setupModels,
};
