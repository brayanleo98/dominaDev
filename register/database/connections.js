
const { DB_URL } = require('../config/config');
const mongoose = require('mongoose');


async function databaseConnection() {

    try {
        await mongoose.connect(DB_URL);

        console.log('Db Connected');

    } catch (error) {
        console.error('Error ============ ON DB Connection')
        console.log(error);
    }

};
module.exports = databaseConnection();