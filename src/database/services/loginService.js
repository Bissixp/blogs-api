const Joi = require('joi');
const models = require('../models');
const { throwInvalidFields } = require('./utils');

const usersService = {
async validadeBody(body) {
  const schema = Joi.object({
    email: Joi.string().required().email().messages({
      'string.empty': 'Some required fields are missing',
      'any.required': 'Some required fields are missing',
    }),
    password: Joi.string().required().messages({
      'string.empty': 'Some required fields are missing',
      'any.required': 'Some required fields are missing',
    }),
  });
  const result = await schema.validateAsync(body);
  return result;
},

async checkUser(body) {
  const { email, password } = body;
    const user = await models.User.findOne({
      where: { email },
      raw: true,
    });
    if (!user || user.password !== password) throwInvalidFields();
    const { password: _, ...newUser } = user;
    return newUser;
},
};

module.exports = usersService;