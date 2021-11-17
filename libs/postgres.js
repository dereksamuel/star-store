const { Client } = require("pg");

async function getConnection() {
  const client = new Client({
    host: "localhost",//Corriendo con docker
    port: +process.env.PORT_DB || 5432,
    user: process.env.USER_DB || "dspp",
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
  });

  await client.connect();
  return client;
}

module.exports = {
  getConnection,
};
