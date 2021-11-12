const faker = require("faker");

class UserService {
  constructor() {
    this.users = [];
    this.init();
  }

  async init() {
    for (let i = 0; i <= 10; i++) {
      this.users.push({
        user_id: faker.datatype.uuid(),
        fullName: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        products: [],
      });
    }
  }

  async create(body) {
    const newUser = {
      user_id: faker.datatype.uuid(),
      ...body,
    };
    
    this.users.push(newUser);
    return newUser;
  }

  async find() {
    return this.users;
  }

  async findOne(id) {
    const myUser = this.users.find((user) => user.user_id === id);

    return myUser;
  }

  async delete(id) {
    const myUserIndex = this.users.findIndex((user) => user.user_id === id);

    this.users.splice(myUserIndex, 1);
    return {
      id
    };
  }

  async update(id, body) {
    const index = this.users.findIndex((user) => user.user_id === id);

    this.users[index] = {
      ...this.users[index],
      ...body
    };
    return this.users[index];
  }
}

module.exports = UserService;
