const Order = require("../models/Order.model");

module.exports.getOrder =async (id)=>{
    const data = await Order.findOne({transactionId:id})
    return data;
}