const { Router } = require("express");

const CategoriesController = require("../controllers/CategoriesController");

const categoryRoutes = Router();
const categoriesController = new CategoriesController();

categoryRoutes.post("/", categoriesController.create);
categoryRoutes.put("/:id", categoriesController.update);

module.exports = categoryRoutes;