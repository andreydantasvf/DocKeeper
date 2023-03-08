const { Router } = require("express");

const userRoutes = require("./user.routes");
const categoryRoutes = require("./category.routes");
const articleRoutes = require("./articles.routes");
const sessionRoutes = require("./sessions.routes");

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/categories", categoryRoutes);
routes.use("/articles", articleRoutes);
routes.use("/sessions", sessionRoutes);

module.exports = routes;