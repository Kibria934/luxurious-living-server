const { ObjectID } = require('bson')
const SSLCommerzPayment = require('sslcommerz-lts')
const Order = require('../models/Order.model')


module.exports.createOrder = async (body) => {
    const store_id = process.env.STORE_ID
    const store_passwd = process.env.STORE_PASSWORD
    const is_live = false
    const transactionId = new ObjectID().toString()
    console.log(body, 'body')
    try {

        const data = {
            total_amount: 100,
            currency: body.currency,
            tran_id: transactionId, // use unique tran_id for each api call
            success_url: `http://localhost:5000/payment/success?transactionId=${transactionId}`,
            fail_url: `http://localhost:5000/payment/fail`,
            cancel_url: 'http://localhost:5000/payment/cancel',
            ipn_url: 'http://localhost:3030/ipn',
            shipping_method: body.shippingMethod,
            product_name: body.product,
            product_category: 'Electronic',
            product_profile: 'general',
            cus_name: body.customer,
            cus_email: body.email,
            cus_add1: 'Dhaka',
            cus_add2: 'Dhaka',
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: body.phone,
            cus_fax: '01711111111',
            ship_name: 'Customer Name',
            ship_add1: 'Dhaka',
            ship_add2: 'Dhaka',
            ship_city: 'Dhaka',
            ship_state: 'Dhaka',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };

        try {
            const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
            const url2 = sslcz.init(data).then(async apiResponse => {
                let GatewayPageURL = apiResponse.GatewayPageURL
                const Orders2 = await Order.create({ ...body, paid: 'false', transactionId: transactionId })
                console.log(GatewayPageURL, "hello tis gateway url")
                return GatewayPageURL

            });
            return url2
        } catch (error) {

            console.log(error)
        }
    } catch (error) {
        console.log(error)
    }
}