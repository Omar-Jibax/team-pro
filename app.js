const express = require("express")
const app = express();
const errorHandler = require("./utils/errorHandler")
const roleRoute = require("./src/router/roleRoute")
app.use(express.json())
app.use('/api/roles', roleRoute)

//Global error handler
app.use(errorHandler)

module.exports = app;


