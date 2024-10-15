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

module.exports ={
    addNewBook
}