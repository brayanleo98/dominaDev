const express = require('express');
const cors = require("cors");
const task = require('./api/task');
const app = express();
const databaseConnection = require('./database/connections');
const { PORT } = require('./config/config');

const StartServer = async () => {

    await databaseConnection;
    app.use(express.json());
    app.use(cors());

    task(app);
    
    app.listen(PORT, () => {
        console.log(`features is listening to port ${PORT}`);
    })
}

StartServer();