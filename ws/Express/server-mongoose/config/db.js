const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://vyshu:123456@in-aws.e0uhb.mongodb.net/')

const conncetion = mongoose.connection;

conncetion.on('connected',() => (console.log("DB connected")))
conncetion.on('error',() => (console.log("DB error")))

module.exports = mongoose

