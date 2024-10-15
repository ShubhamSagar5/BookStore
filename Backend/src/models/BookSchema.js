const mongoose = require('mongoose')
const validator = require('validator')

const boookSchema = new mongoose.Schema({
    bookName:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true,
        minLength:[10,"Description Should Be Contain at least 10 word"]
    },
    price:{
        type:Number,
        required:true,

    },
    author:{
        type:String,
        required:true,
        trim:true,
    },
    image:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Please Provide Valid URL ")
            }
        }

    }

},{
    timestamps:true
})


const Book = new mongoose.model("BookStore",boookSchema) 


module.exports = {
    Book
}