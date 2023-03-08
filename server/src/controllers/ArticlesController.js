const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class ArticlesController {
  async create(request, response) {
    const { name, imageUrl, description, categoryId, content } = request.body;
    const userId = request.user.id;

    await knex("articles").insert({
      name,
      description,
      categoryId,
      userId,
      content,
      imageUrl
    });

    return response.status(201).json();
  }

  async delete(request, response) {
    const { id } = request.params;
    const userId = request.user.id;

    const article = await knex("articles").where({ id, userId }).first();

    if (!article) {
      throw new AppError("Artigo não encontrado.");
    }

    await knex("articles").where({ id }).delete();

    return response.status(204).json();
  }

  async show(request, response) {
    const { id } = request.params;
    const userId = request.user.id;

    const article = await knex("articles").where({ id, userId }).first();

    if (!article) {
      throw new AppError("Artigo não encontrada.");
    }

    article.content = article.content.toString();

    return response.json(article);
  }

  async showByCategory(request, response) {
    const categoryId = request.params.id;
    const userId = request.user.id;
    const categories = await knex.raw(
      `
      WITH RECURSIVE subcategories (id) AS (
        SELECT id FROM categories WHERE id = ${categoryId}
        UNION ALL
        SELECT c.id FROM subcategories, categories c
          WHERE "parentId" = subcategories.id
      )
      SELECT id FROM subcategories
    `);
    const ids = categories.rows.map(category => category.id);

    const articles = await knex({ a: "articles", u: "users" })
      .select('a.id', 'a.name', 'a.description', 'a.imageUrl', { author: 'u.name' })
      .whereRaw('?? = ??', ['u.id', 'a.userId'])
      .whereIn('categoryId', ids)
      .orderBy('a.id', 'desc');

    return response.json(articles);
  }
}

module.exports = ArticlesController;