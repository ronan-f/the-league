const { PORT } = require('./config/env');

const express = require('express');
const app = express();
const routes = require('./routes');

routes.set(app);

const start = async () => {
    app.listen(PORT);
    console.log(`Listening on ${PORT} 🚀🚀🚀`);
};

start();
