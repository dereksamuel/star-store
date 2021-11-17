const { Sequelize } = require("sequelize");
const { config } = require("../config/config");
const { setupModels } = require("../db/models");

const URI = `
  postgres://${config.userDB}:${config.passwordDB}@${config.hostDB}:${config.portDB}/${config.nameDB}
`;
const sequelize = new Sequelize(URI, {
  dialect: "postgres",
  logging: true, // console result always
});

setupModels(sequelize);

sequelize.sync();

module.exports = {
  sequelize,
};
