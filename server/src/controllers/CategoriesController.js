const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class CategoriesController {
  async create(request, response) {
    const { name, parentId } = request.body;

    await knex("categories").insert({
      name,
      parentId
    });

    return response.status(201).json();
  }

  async update(request, response) {
    const { id } = request.params;
    const categoryUpdate = { ...request.body };

    const category = await knex("categories").where({ id }).first();

    if (!category) {
      throw new AppError("Categoria não encontrada.");
    }

    await knex("categories")
      .where({ id })
      .update(categoryUpdate);

    return response.status(204).json();
  }
}

module.exports = CategoriesController;