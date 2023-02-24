const Stat = require("../database/mongodb/models/stat");

class StatsController {
  async index(request, response) {
    const result = await Stat.findOne({}, {}, { sort: { 'createAd': -1 } });
    const defaultStats = {
      users: 0,
      categories: 0,
      articles: 0
    }

    return response.json(result || defaultStats);
  }
}

module.exports = StatsController;