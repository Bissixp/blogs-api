const userService = require('../services/userService');
const auth = require('../services/authService');

const loginController = {
  /** @type {import('express').RequestHandler} */
  async add(req, res) {
    const user = await userService.validadeAddBody(req.body);
    const checkUser = await userService.checkUser(user);
    const token = await auth.makeToken(checkUser);
    res.status(201).json({ token });
  },
};

module.exports = loginController;