const dotEnv = require('dotenv');
dotEnv.config();
module.exports = {
  PORT: process.env.PORT || 8000,
  DB_URL: process.env.MONGODB_URI || '',
  TASK_URI: process.env.TASK_URI || ''
};