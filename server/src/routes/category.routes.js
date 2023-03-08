const { Router } = require("express");

const CategoriesController = require("../controllers/CategoriesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const categoryRoutes = Router();
const categoriesController = new CategoriesController();

categoryRoutes.use(ensureAuthenticated);

categoryRoutes.get("/", categoriesController.index);
categoryRoutes.get("/tree", categoriesController.showTree);
categoryRoutes.post("/", categoriesController.create);
categoryRoutes.delete("/:id", categoriesController.delete);

module.exports = categoryRoutes;