const express = require('express');
const { getOrder } = require('../controllers/orders.controller');
const successRoute = express.Router()


successRoute.route("/success").get(getOrder)

module.exports=successRoute;