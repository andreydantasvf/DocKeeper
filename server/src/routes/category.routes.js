const { Router } = require("express");

const CategoriesController = require("../controllers/CategoriesController");

const categoryRoutes = Router();
const categoriesController = new CategoriesController();

categoryRoutes.get("/", categoriesController.index);
categoryRoutes.get("/tree", categoriesController.showTree);
categoryRoutes.get("/:id", categoriesController.show);
categoryRoutes.post("/", categoriesController.create);
categoryRoutes.put("/:id", categoriesController.update);
categoryRoutes.delete("/:id", categoriesController.delete);

module.exports = categoryRoutes;