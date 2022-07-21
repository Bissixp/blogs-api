const { Router } = require('express');
const postController = require('../controllers/postsController');

const postRouter = Router();

postRouter.post('/', postController.add);
postRouter.get('/:id', postController.getPostById);
postRouter.get('/', postController.getAllPosts);
postRouter.put('/:id', postController.edit);

module.exports = postRouter;