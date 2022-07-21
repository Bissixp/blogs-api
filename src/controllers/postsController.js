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

   /** @type {import('express').RequestHandler} */
   async getAllPosts(req, res) {
    await authService.validateAuthorization(req.headers.authorization);
    await authService.readToken(req.headers.authorization);
    const allPosts = await postService.getAllPosts();
    res.status(200).json(allPosts);
  },

     /** @type {import('express').RequestHandler} */
     async getPostById(req, res) {
      await authService.validateAuthorization(req.headers.authorization);
      await authService.readToken(req.headers.authorization);
      const postById = await postService.getPostById(req.params);
      res.status(200).json(postById);
    },

};

module.exports = postController;