const { Router } = require("express");

const userRoutes = require("./user.routes");
const categoryRoutes = require("./category.routes");

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/categories", categoryRoutes);

module.exports = routes;