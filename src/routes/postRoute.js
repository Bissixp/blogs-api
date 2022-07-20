const { Router } = require('express');
const postController = require('../controllers/postsController');

const postRouter = Router();

postRouter.post('/', postController.add);
postRouter.get('/', postController.getAllPosts);

module.exports = postRouter;