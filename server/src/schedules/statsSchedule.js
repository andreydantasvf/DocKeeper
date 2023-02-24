const schedule = require("node-schedule");
const knex = require("../database/knex");
const Stat = require("../database/mongodb/models/stat");

async function updateStats() {
  schedule.scheduleJob('*/1 * * * *', async function () {
    const usersCounter = await knex("users").count('id').first();
    const categoriesCounter = await knex("categories").count('id').first();
    const articlesCounter = await knex("articles").count('id').first();

    const lastStat = await Stat.findOne({}, {}, { sort: { 'createAd': -1 } });

    const stat = new Stat({
      users: usersCounter.count,
      categories: categoriesCounter.count,
      articles: articlesCounter.count,
      createdAt: new Date()
    });

    const changeUsers = !lastStat || stat.users !== lastStat.users;
    const changeCategories = !lastStat || stat.categories !== lastStat.categories;
    const changeArticles = !lastStat || stat.articles !== lastStat.articles;

    if (changeUsers || changeCategories || changeArticles) {
      stat.save().then(() => console.log('[Stats] Estatísticas atualizadas!'));
    }
  });
}

module.exports = updateStats;