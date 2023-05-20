const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
const { PORT, TASK_URI } = require('./config/config');
const user = require('./api/user');
const app = express();
const databaseConnection = require('./database/connections')

const StartServer = async () => {

    await databaseConnection;

    app.use(express.json());
    app.use(cors());

    user(app);

    app.use('/task', proxy(TASK_URI))


    app.listen(PORT, () => {
        console.log(`register is listening to port ${PORT}`);
    })
}

StartServer();