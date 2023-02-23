const { Router } = require("express");

const userRoutes = require("./user.routes");
const categoryRoutes = require("./category.routes");
const articleRoutes = require("./articles.routes");

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/categories", categoryRoutes);
routes.use("/articles", articleRoutes);

module.exports = routes;