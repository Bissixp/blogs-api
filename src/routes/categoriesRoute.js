const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');

const categoriesRouter = Router();

categoriesRouter.post('/', categoriesController.addNewCategory);

module.exports = categoriesRouter;