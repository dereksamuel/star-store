const { Model, DataTypes, Sequelize } = require("sequelize");

const PRODUCTS_TABLE = "products";

const ProductsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.CHAR,
  },
  price: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  isBlock: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "is_block",
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
};

class Product extends Model {
  static assocciate() {
    //
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: PRODUCTS_TABLE,
      modelName: "Product",
      timestamps: false,
    };
  }
}

module.exports = {
  PRODUCTS_TABLE,
  Product,
  ProductsSchema,
};
