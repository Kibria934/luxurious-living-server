const { createOrder } = require("../services/createOrder.service");
const { getOrder } = require("../services/getOrder.service");



module.exports.Order = async (req, res, next) => {
    try {
        const order = req.body;
        const result = await createOrder(order)

        res.send({
            url: result,
        })

    } catch (error) {
        console.log(error)
    }
};


module.exports.getOrder = async (req, res, next) => {
    const transactionId = (req.query.transactionId)
    console.log(transactionId, "transactiond id  ++")

    const result = await getOrder(transactionId)
    if (result) {
        res.send({
            status: 'success',
            data: result
        })
    }
}