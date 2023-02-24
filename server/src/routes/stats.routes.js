const { Router } = require("express");

const StatsController = require("../controllers/StatsController");
const statsController = new StatsController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const statsRoutes = Router();
statsRoutes.use(ensureAuthenticated);

statsRoutes.get("/", statsController.index);

module.exports = statsRoutes;