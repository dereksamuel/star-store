const { Pool } = require("pg");
const { config } = require("../config/config");

const URI = `postgres://${config.userDB}:${config.passwordDB}@${config.hostDB}:${config.portDB}/${config.nameDB}`;
const pool = new Pool({ connectionString: URI, });

module.exports = {
  pool,
};
