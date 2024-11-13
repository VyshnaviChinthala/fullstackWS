const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://vyshu:20022005@in-aws.e0uhb.mongodb.net/?retryWrites=true&w=majority&appName=In-AWS")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')