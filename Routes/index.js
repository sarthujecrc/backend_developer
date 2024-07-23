const express = require("express");
const userRoutes = require("../Routes/userRoutes");
const routes = express.Router();

// end points
routes.use("/User", userRoutes);

module.exports = routes;
