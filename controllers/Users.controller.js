const Users = require("../models/Users.model")
const { makeUserService } = require("../services/Users.service")
const { getUserService } = require("../services/getUserService.service")
const bcrypt = require('bcrypt');

module.exports.createUser = async (req, res, next) => {
    const data = req.body
    const hashedPassword = await bcrypt.hash(data.password, 10)
    try {
        const result = await makeUserService({ ...data, password: hashedPassword })
        if (result) {
            res.status(200).json({
                status: "success",
                message: "Data inserted successfully",
                data: result,
            })
        }
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Data is not inserted!",
            error: error.message,
        })
    }
}

module.exports.getUsers = async (req, res, next) => {
    const query = req.query;
    // const result = await getUser()
}
module.exports.getUser = async (req, res, next) => {
    try {
        const { email } = req.params;
        const result = await getUserService(email)

        if (result) {
            res.status(200).json({
                status: "success",
                message: "Data found successfully",
                data: result,
            })
        } else {
            res.status(400).json({
                status: 'fail',
                error: error.message,
            })
        }
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: error.message,
        })
    }
}