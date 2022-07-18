require('dotenv').config();
const jwt = require('jsonwebtoken');
const { throwTokenError } = require('./utils');

const secret = process.env.JWT_SECRET;

const authService = {
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