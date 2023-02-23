const { Router } = require("express");

const UsersController = require("../controllers/UsersControllers");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRoutes = Router();
const usersController = new UsersController();

userRoutes.get("/", ensureAuthenticated, usersController.index);
userRoutes.post("/", usersController.create);
userRoutes.put("/:id", ensureAuthenticated, usersController.update);

module.exports = userRoutes;