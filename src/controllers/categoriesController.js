const categoriesService = require('../services/categoriesService');
const authService = require('../services/authService');

const categoriesController = {
    /** @type {import('express').RequestHandler} */
    async addNewCategory(req, res) {
      await authService.validateAuthorization(req.headers.authorization);
      await authService.readToken(req.headers.authorization);
      const nameValidate = await categoriesService.validadeAddBody(req.body);
      const category = await categoriesService.addCategory(nameValidate);
      res.status(201).json(category);
    },

    /** @type {import('express').RequestHandler} */
    async getAll(req, res) {
    await authService.validateAuthorization(req.headers.authorization);
    await authService.readToken(req.headers.authorization);
    const categories = await categoriesService.getAll();
    res.status(200).json(categories);
  },
};

module.exports = categoriesController;