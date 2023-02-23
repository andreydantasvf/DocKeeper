const { Router } = require("express");

const CategoriesController = require("../controllers/CategoriesController");
const ArticlesController = require("../controllers/ArticlesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const categoryRoutes = Router();
const categoriesController = new CategoriesController();
const articlesController = new ArticlesController();

categoryRoutes.use(ensureAuthenticated);

categoryRoutes.get("/", categoriesController.index);
categoryRoutes.get("/tree", categoriesController.showTree);
categoryRoutes.get("/:id", categoriesController.show);
categoryRoutes.get("/:id/articles", articlesController.showByCategory);
categoryRoutes.post("/", categoriesController.create);
categoryRoutes.put("/:id", categoriesController.update);
categoryRoutes.delete("/:id", categoriesController.delete);

module.exports = categoryRoutes;