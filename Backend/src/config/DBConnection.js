const mongoose = require('mongoose')


const DBConnection = async() => {
    mongoose.connect(process.env.DB_URL)
}

module.exports = {
    DBConnection
}