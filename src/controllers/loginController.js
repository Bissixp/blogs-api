const loginService = require('../services/loginService');
const auth = require('../services/authService');

const loginController = {
  /** @type {import('express').RequestHandler} */
  async login(req, res) {
    const user = await loginService.validadeBody(req.body);
    const checkUser = await loginService.checkUser(user);
    const token = await auth.makeToken(checkUser);
    res.status(200).json({ token });
  },
};

module.exports = loginController;