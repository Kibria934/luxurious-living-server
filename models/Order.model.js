const { timeStamp } = require("console");
const { default: mongoose, Schema } = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;


const orderSchema = mongoose.Schema({
    customer: {
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String
    },
    transactionId: {
        type: String
    },
    product: {
        type: String
    },
    creditCard: {
        type: String
    }
    ,
    paypal: {
        type: String
    }
    ,
    cardNumber: {
        type: Number
    }
    ,
    phone: {
        type: Number
    }
    ,
    currency: {
        type: String
    }
    ,
    paid: {
        type: String
    }
    ,
    postcode: {
        type: Number
    }
    ,
    shippingMethod: {
        type: String
    }

}, { timeStamps: true })

const Order = mongoose.model('order', orderSchema)


module.exports = Order;