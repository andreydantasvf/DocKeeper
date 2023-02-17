const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const { hash, compare } = require("bcryptjs");

class UsersController {
  async create(request, response) {
    const { name, email, password, admin = false } = request.body;

    const userWithEmail = await knex("users").where({ email }).first();

    if (userWithEmail) {
      throw new AppError("Este e-mail já está em uso.");
    }

    const hashedPassword = await hash(password, 8);

    await knex("users").insert({
      name,
      email,
      password: hashedPassword,
      admin
    });

    return response.status(201).json();
  }

  async update(request, response) {
    const { name, email, password, old_password, admin } = request.body;
    const { id } = request.params;

    const user = await knex("users").where({ id }).first();

    if (!user) {
      throw new AppError("Usuário não encontrado.")
    }

    const userWithUpdateEmail = await knex("users").where({ email }).first();

    if (userWithUpdateEmail && userWithUpdateEmail.id != user.id) {
      throw new AppError("Este e-mail já está em uso.");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.admin = admin ?? user.admin;

    if (password && !old_password) {
      throw new AppError("Você precisa informar a senha antiga para alterar a senha.");
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError("A senha antiga não confere.");
      }

      user.password = await hash(password, 8);
    }

    await knex("users")
      .where({ id: user.id })
      .update({
        name: user.name,
        email: user.email,
        admin: user.admin,
        password: user.password
      });

    return response.json();
  }

  async index(request, response) {
    const users = await knex("users")
      .select('id', 'name', 'email', 'admin');

    return response.json(users);
  }
}

module.exports = UsersController;