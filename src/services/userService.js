const Joi = require('joi');
const models = require('../database/models');
const { throwSameEmail, throwNotExistError } = require('./utils');

const userService = {
async validadeAddBody(body) {
  const schema = Joi.object({
    displayName: Joi.string().required().min(8),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
    image: Joi.string().required(),
  });
  const result = await schema.validateAsync(body);
  return result;
},

async checkUser(body) {
  const { displayName, email, password, image } = body;
    const user = await models.User.findOne({
      where: { email },
      raw: true,
    });
    if (user) throwSameEmail();
    const add = {
      displayName,
      email,
      password,
      image,
    };
    const addUser = await models.User.create(add);
    const createUser = addUser.toJSON();
    return createUser;
},

async getAll() {
 const getAllUsers = await models.User.findAll(
  { attributes: { exclude: ['password'] } },
  { raw: true },
 );
 return getAllUsers;
},

async getById(body) {
  const { id } = body;
  const getById = await models.User.findByPk(
   id,
   { attributes: { exclude: ['password'] } },
   { raw: true },
  );
  if (!getById) throwNotExistError('User does not exist');
  return getById;
 },
};

module.exports = userService;