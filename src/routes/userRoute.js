const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.post('/', userController.add);
userRouter.get('/:id', userController.getById);
userRouter.get('/', userController.getAll);

module.exports = userRouter;