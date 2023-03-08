const { Router } = require("express");

const ArticlesController = require("../controllers/ArticlesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const articleRoutes = Router();
const articlesController = new ArticlesController();

articleRoutes.use(ensureAuthenticated);

articleRoutes.get("/category/:id", articlesController.showByCategory);
articleRoutes.get("/:id", articlesController.show);
articleRoutes.post("/", articlesController.create);
articleRoutes.delete("/:id", articlesController.delete);

module.exports = articleRoutes;