require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const authService = {
  async makeToken(user) {
    const payload = { data: user };
    const token = jwt.sign(payload, secret);
    return token;
  },
};

module.exports = authService;