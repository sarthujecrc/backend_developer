const dotenv = require("dotenv");
dotenv.config();

const config = {
  URL: process.env.url,
  PORT: process.env.port,
  HOST: process.env.host,
  SECRET_KEY: process.env.secret_key,
};

module.exports = config;
