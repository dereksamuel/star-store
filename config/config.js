const config = {
  env: process.env.NODE_ENV || "dev",
  portDB: process.env.PORT_DB || 5432,
  userDB: encodeURIComponent(process.env.USER_DB),
  passwordDB: encodeURIComponent(process.env.PASSWORD_DB),
  nameDB: process.env.NAME_DB,
  hostDB: "localhost",

  port: process.env.PORT,
};

module.exports = {
  config,
};
