const dotEnv = require('dotenv');
dotEnv.config();
module.exports = {
  PORT: process.env.PORT || 8001,
  DB_URL: process.env.MONGODB_URI || '',
  APP_SECRET: process.env.APP_SECRET || ''
};