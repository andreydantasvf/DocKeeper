const { Router } = require("express");

const ArticlesController = require("../controllers/ArticlesController");

const articleRoutes = Router();
const articlesController = new ArticlesController();

articleRoutes.get("/", articlesController.index);
articleRoutes.get("/:id", articlesController.show);
articleRoutes.post("/", articlesController.create);
articleRoutes.put("/:id", articlesController.update);
articleRoutes.delete("/:id", articlesController.delete);

module.exports = articleRoutes;