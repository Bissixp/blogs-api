require('dotenv').config();
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const { throwTokenError } = require('./utils');

const secret = process.env.JWT_SECRET || 'mySecretPassword!';

const authService = {
  async validateAuthorization(auth) {
    const schema = Joi.string().required();
    try {
      const result = await schema.validateAsync(auth);
      const [, token] = result.split(' ');
      return token;
    } catch (error) {
      throwTokenError('Token not found');
    }
  },

  async makeToken(user) {
    const { password, ...restOfUser } = user;
    const payload = { data: restOfUser };
    const token = jwt.sign(payload, secret);
    return token;
  },

  async readToken(token) {
    try {
      const { data } = jwt.verify(token, secret);
      return data;
    } catch (error) {
      throwTokenError('Expired or invalid token');
    }
  },
};

module.exports = authService;