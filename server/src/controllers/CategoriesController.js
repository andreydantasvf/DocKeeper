const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class CategoriesController {
  async create(request, response) {
    const { name, parentId } = request.body;
    const userId = request.user.id;

    await knex("categories").insert({
      name,
      parentId,
      userId
    });

    return response.status(201).json();
  }

  async delete(request, response) {
    const { id } = request.params;
    const userId = request.user.id;

    const category = await knex("categories").where({ id, userId }).first();

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

    const userId = request.user.id;

    const categories = await knex("categories").where({ userId });

    return response.json(withPath(categories));
  }

  async showTree(request, response) {
    function toTree(categories, tree) {
      if (!tree) {
        tree = categories.filter(category => !category.parentId);
      }
      tree = tree.map(parentNode => {
        const isChild = node => node.parentId == parentNode.id;
        parentNode.nodes = toTree(categories, categories.filter(isChild));
        parentNode.key = parentNode.id;
        parentNode.label = parentNode.name;
        return parentNode;
      });
      return tree;
    }

    const userId = request.user.id;

    await knex("categories").where({ userId })
      .then(categories => response.json(toTree(categories)));
  }
}

module.exports = CategoriesController;