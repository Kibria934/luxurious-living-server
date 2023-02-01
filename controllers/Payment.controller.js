const Order = require("../models/Order.model");

module.exports.success = async (req, res, next) => {
    const { transactionId } = req.query

    try {
        const doc = await Order.updateOne({ transactionId: transactionId }, { $set: { paid: 'true' } })
        if (doc.modifiedCount > 0) {
            res.redirect(`http://localhost:3000/payment/success?transactionId=${transactionId}`)
        }
    } catch (error) {
        console.log(error.message)
    }


}
module.exports.fail = async (req, res, next) => {
    const { transactionId } = req.query
    try {
        const result = await Order.deleteOne({ transactionId })

        if (result.deletedCount) {
            res.redirect(`http://localhost:3000/payment/fail?transactionId=${transactionId}`)
        }
    } catch (error) {
        console.log(error.message)
    }
}

