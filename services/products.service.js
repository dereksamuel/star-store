const faker = require("faker");

class Product {
  constructor() {
    this.products = [];
    this.init(80);
  }

  async init(limit = 80) {
    for (let i = 0; i <= limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.name.title(),
        price: +faker.commerce.price(),
        isBlock: faker.datatype.boolean(),
        image: faker.image.cats(),
        categories: [],
      });
    }
  }

  async create(body) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...body,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return this.products;
  }

  async findOne(id) {
    const myProduct = this.products.find((product) => product.id === id);

    return myProduct;
  }

  async delete(id) {
    const myProductIndex = this.products.findIndex((product) => product.id === id);

    this.products.splice(myProductIndex, 1);
    return {
      id
    };
  }

  async update(id, body) {
    const index = this.products.findIndex((product) => product.id === id);

    this.products[index] = {
      ...this.products[index],
      ...body
    };
    return this.products[index];
  }
}

module.exports = Product;
