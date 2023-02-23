const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class ArticlesController {
  async create(request, response) {
    const { name, description, categoryId, userId, content } = request.body;

    await knex("articles").insert({
      name,
      description,
      categoryId,
      userId,
      content
    });

    return response.status(201).json();
  }

  async update(request, response) {
    const articleUpdate = { ...request.body };
    const { id } = request.params;

    const article = await knex("articles").where({ id }).first();

    if (!article) {
      throw new AppError("Artigo não encontrado.");
    }

    await knex("articles").where({ id }).update(articleUpdate);

    return response.status(204).json();
  }

  async delete(request, response) {
    const { id } = request.params;

    const article = await knex("articles").where({ id }).first();

    if (!article) {
      throw new AppError("Artigo não encontrado.");
    }

    await knex("articles").where({ id }).delete();

    return response.status(204).json();
  }

  async index(request, response) {
    const limit = 10; // usage for pagination

    const page = request.query.page || 1;

    const result = await knex("articles").count('id').first();
    const count = parseInt(result.count);

    const articles = await knex("articles")
      .select('id', 'name', 'description')
      .limit(limit).offset(page * limit - limit);

    return response.json({ data: articles, count, limit });
  }

  async show(request, response) {
    const { id } = request.params;

    const article = await knex("articles").where({ id }).first();

    if (!article) {
      throw new AppError("Artigo não encontrada.");
    }

    article.content = article.content.toString();

    return response.json(article);
  }

  async showByCategory(request, response) {
    const page = request.query.page || 1;
    const categoryId = request.params.id;
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
      .limit(10).offset(page * 10 - 10)
      .whereRaw('?? = ??', ['u.id', 'a.userId'])
      .whereIn('categoryId', ids)
      .orderBy('a.id', 'desc');

    return response.json(articles);
  }
}

module.exports = ArticlesController;