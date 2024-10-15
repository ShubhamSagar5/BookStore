const { Book } = require("../models/BookSchema")


const addNewBook = async(req,res) => {
    try {
        
        const {bookName,description,price,author,image} = req.body

        if(!bookName || !description || !price || !author || !image){
            throw new Error("All Fields Required")
        }

        const book = new Book({
            bookName,
            description,
            price,
            author,
            image
        })

        await book.save() 

        return res.status(200).json({
            success:true,
            message:"New Book Added Successfully",
            data:book
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const getAllBookList = async(req,res) => {
    try {
        
        const books = await Book.find() 

        return res.status(200).json({
            success:true,
            message:"List of Book",
            data:books
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
} 

const getSingleBook  = async(req,res)=>{
    try {
        
        const {bookId} = req.params

        const book = await Book.findById(bookId) 

        return res.status(200).json({
            success:true,
            message:"Deatils of book fetch successfully",
            data:book
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const updateBookDetails = async(req,res) => {
    try {
        
        const {bookId} = req.params 

        const {bookName,description,price,author,image} = req.body

        const book = await Book.findByIdAndUpdate(bookId,{
            bookName,
            description,
            price,
            image,
            author
        },{new:true})

        return res.status(200).json({
            success:true,
            message:"Book Details Update Successfully",
            data:book
        })


    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const deleteBook = async(req,res) => {
    try {
        
        const {bookId} = req.params 

        const book = await Book.findByIdAndDelete(bookId) 

        return res.status(200).json({
            success:true,
            message:"Book Delete Successfully",
            data:book
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports ={
    addNewBook,
    getAllBookList,
    getSingleBook,
    updateBookDetails,
    deleteBook

}