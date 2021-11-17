const faker = require("faker");
const { pool } = require("../libs/postgres.pool");

class CategoryService {
  constructor() {
    this.categories = [];
    this.init();
    this.pool = pool;
    this.pool.on("error", (error) => {
      console.error(error);
    });
  }

  async init() {
    for (let i = 0; i <= 10; i++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        label: faker.name.jobType(),
      });
    }
  }

  async create(body) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...body,
    };
    
    this.categories.push(newCategory);
    return newCategory;
  }

  async find() {
    const response = await this.pool.query("SELECT * FROM task");
    return response.rows;
  }

  async findOne(id) {
    const myCategory = this.categories.find((category) => category.id === id);

    return myCategory;
  }

  async delete(id) {
    const myCategoryIndex = this.categories.findIndex((category) => category.id === id);

    this.categories.splice(myCategoryIndex, 1);
    return {
      id
    };
  }

  async update(id, body) {
    const index = this.categories.findIndex((category) => category.id === id);

    this.categories[index] = {
      ...this.categories[index],
      ...body
    };
    return this.categories[index];
  }
}

module.exports = CategoryService;
