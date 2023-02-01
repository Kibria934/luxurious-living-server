const Users = require("../models/Users.model")

module.exports.getUserService = async (email) => {
    return await Users.findOne({ email })
}