const express = require('express');

const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const authRouter = express.Router();

authRouter.post('/', authController.authenticateUser);
authRouter.delete('/', authMiddleware, authController.logoutUser);

module.exports = authRouter;