const Joi = require('joi');
const Sequelize = require('sequelize');
const models = require('../database/models');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);
const { throwNotFoundError } = require('./utils');

const postService = {
  async validadeAddBody(body) {
    const schema = Joi.object({
      title: Joi.string().required(),
      content: Joi.string().required(),
      categoryIds: Joi.array().required().items(Joi.number()),
    }).messages({
      'string.empty': 'Some required fields are missing',
      'any.required': 'Some required fields are missing',
    });
    const result = await schema.validateAsync(body);
    return result;
  },

  async getById(id) {
    const findCategory = await models.Category.findOne(
      { where: { id } },
      { raw: true },
);
    if (!findCategory) throwNotFoundError('"categoryIds" not found');
    return findCategory;
  },
  
  async add(id, { title, content, categoryIds }) {
    const result = await sequelize.transaction(async (t) => {
      const post = await models.BlogPost
      .create({ title, content, userId: id, published: new Date(), updated: new Date(),
      }, { transaction: t, raw: true }); 
      await Promise.all(categoryIds.map((itr) => models.PostCategory
      .create({ postId: post.id, categoryId: itr }, { transaction: t, raw: true }))); 
      return post;
    });
    return result;
  },
};

module.exports = postService;