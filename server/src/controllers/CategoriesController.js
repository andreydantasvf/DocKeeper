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

  async delete(request, response) {
    const { id } = request.params;

    const category = await knex("categories").where({ id }).first();

    if (!category) {
      throw new AppError("Categoria não encontrada.");
    }

    const subcategory = await knex("categories").where({ parentId: id }).first();

    if (subcategory) {
      throw new AppError("Categoria possui subcategorias.");
    }

    const articles = await knex("articles").where({ categoryId: id }).first();

    if (articles) {
      throw new AppError("Categoria possui artigos.");
    }

    await knex("categories").where({ id }).delete();

    return response.json();
  }

  async index(request, response) {
    function withPath(categories) {
      function getParent(categories, parentId) {
        const parent = categories.filter(parent => parent.id === parentId);
        return parent.length ? parent[0] : null;
      }

      const categoriesWithPath = categories.map(category => {
        let path = category.name;
        let parent = getParent(categories, category.parentId);

        while (parent) {
          path = `${parent.name} >  ${path}`;
          parent = getParent(categories, parent.parentId)
        }
        return { ...category, path }
      })

      categoriesWithPath.sort((category1, category2) => {
        if (category1.path < category2.path) return -1;
        if (category1.path > category2.path) return 1;
        return 0;
      });

      return categoriesWithPath;
    }

    const categories = await knex("categories");

    return response.json(withPath(categories));
  }

  async show(request, response) {
    const { id } = request.params;

    const category = await knex("categories").where({ id }).first();

    if (!category) {
      throw new AppError("Categoria não encontrada.");
    }

    return response.json(category);
  }
}

module.exports = CategoriesController;