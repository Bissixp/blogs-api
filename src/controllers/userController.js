const userService = require('../services/userService');
const authService = require('../services/authService');

const loginController = {
  /** @type {import('express').RequestHandler} */
  async add(req, res) {
    const user = await userService.validadeAddBody(req.body);
    const checkUser = await userService.checkUser(user);
    const token = await authService.makeToken(checkUser);
    res.status(201).json({ token });
  },

  /** @type {import('express').RequestHandler} */
  async getAll(req, res) {
    await userService.validateAuthorization(req.headers.authorization);
    await authService.readToken(req.headers.authorization);
    const users = await userService.getAll();
    res.status(200).json(users);
  },

    /** @type {import('express').RequestHandler} */
    async getById(req, res) {
      await userService.validateAuthorization(req.headers.authorization);
      await authService.readToken(req.headers.authorization);
      const users = await userService.getById(req.params);
      res.status(200).json(users);
    },
};

module.exports = loginController;