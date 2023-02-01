const express = require('express');
const userController = require('../controllers/Users.controller');
const userRouter = express.Router()

userRouter.
    route('/signUp')
    .post(userController.createUser)

userRouter.
    route('/all-user')
    .get(userController.getUsers)

userRouter.
    route('/get-user/:email')
    .get(userController.getUser)

module.exports = userRouter;