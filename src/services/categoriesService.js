const Joi = require('joi');
const models = require('../database/models');

const categoryService = {
async validadeAddBody(body) {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  const result = await schema.validateAsync(body);
  return result;
},

async addCategory(body) {
  const { name } = body;
    const newCategory = await models.Category.create({
      name,
      raw: true,
    });
    return newCategory;
},

async getAll() {
  const getAllCategories = await models.Category.findAll(
   { raw: true },
  );
  return getAllCategories;
 },

};

module.exports = categoryService;