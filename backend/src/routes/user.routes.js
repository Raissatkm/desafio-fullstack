const express = require('express');

const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const userRouter = express.Router();

userRouter.get('/', userController.listUsers);
userRouter.post('/', userController.createUser);
userRouter.get('/me', authMiddleware, userController.me)


module.exports = userRouter;

