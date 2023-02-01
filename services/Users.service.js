const Users = require("../models/Users.model")

module.exports.makeUserService = async (data) => {
    try {
        const result = await Users.create(data)
        return result;
    } catch (error) {
        console.log(error)
    }
}