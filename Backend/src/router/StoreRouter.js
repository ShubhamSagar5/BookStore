const express = require('express')
const { addNewBook, getAllBookList, getSingleBook,updateBookDetails, deleteBook } = require('../controller/StoreController')

const bookRouter = express.Router() 

bookRouter.post("/addBook",addNewBook)
bookRouter.get("/getBooks",getAllBookList)
bookRouter.get("/getBook/:bookId",getSingleBook)
bookRouter.post("/updateBook/:bookId",updateBookDetails)
bookRouter.delete("/deleteBook/:bookId",deleteBook)

module.exports = bookRouter