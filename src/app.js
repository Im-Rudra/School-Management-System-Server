const express = require('express');
const rootRouter = require('./routers/routes');
const app = express();

app.use('/', rootRouter);

module.exports = app;
