const { Router } = require("express");

const UsersController = require("../controllers/UsersControllers");

const userRoutes = Router();
const usersController = new UsersController();

userRoutes.get("/", usersController.index);
userRoutes.post("/", usersController.create);
userRoutes.put("/:id", usersController.update);

module.exports = userRoutes;