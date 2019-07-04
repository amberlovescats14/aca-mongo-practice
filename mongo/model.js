const mongoose = require('mongoose')
const UsersSchema = require('./schema')

const UsersModel = mongoose.model(`User`, UsersSchema)

module.exports = UsersModel