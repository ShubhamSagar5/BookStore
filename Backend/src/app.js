const express  = require("express")
const dotenv = require('dotenv')
const { DBConnection } = require("./config/DBConnection")
const bookRouter = require("./router/StoreRouter")


const app = express()

dotenv.config({
    path:"./.env"
})

app.use(express.json())
app.use("/api/v1",bookRouter)


app.get("/",(req,res)=>{
    res.send("Hello Book Store")
})



DBConnection()
.then(()=>{
    console.log("Database Connected Successfully")

    app.listen(process.env.PORT,(req,res)=>{
        console.log("Server listen on port " + process.env.PORT)
    })
})
.catch((err)=>{
    console.log(err.message)
})