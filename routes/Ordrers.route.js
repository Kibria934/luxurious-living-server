const express= require('express');
const { Order } = require('../controllers/orders.controller');
const router = express.Router()


router.route('/').post(Order)




module.exports=router;