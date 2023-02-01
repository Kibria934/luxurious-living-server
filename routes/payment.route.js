const express = require('express');
const paymentController = require('../controllers/Payment.controller');
const paymentRouter = express.Router()

paymentRouter.route('/').post(paymentController.success)
// paymentRouter.route('/fail').post(paymentController.fail)

module.exports=paymentRouter;