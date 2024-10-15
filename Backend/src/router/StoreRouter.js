const express = require('express')
const { addNewBook } = require('../controller/StoreController')

const bookRouter = express.Router() 

bookRouter.post("/addBook",addNewBook)

module.exports = bookRouter