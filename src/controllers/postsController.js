const postService = require('../services/postsService');
const authService = require('../services/authService');

const postController = {
  /** @type {import('express').RequestHandler} */
  async add(req, res) {
    const { categoryIds } = req.body;
    await authService.validateAuthorization(req.headers.authorization);
    const { id } = await authService.readToken(req.headers.authorization);
    await postService.validadeAddBody(req.body);
    await Promise.all(categoryIds.map((cat) => postService.getById(cat))); 
    const blogPost = await postService.add(id, req.body);
    res.status(201).json(blogPost);
  },
};

module.exports = postController;