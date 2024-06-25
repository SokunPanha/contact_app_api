const express = require("express")
const app = express() 
const dotenv = require("dotenv").config()
//port
const port = process.env.PORT || 3000

//customer middleware error handler
const errorHandler = require("./middleware/errorHandler")

//route file 
const contactRoutes = require("./routes/contactRoutes")
const dbConnection = require("./config/configDb")

//dbconnection
dbConnection()

//built middleware 
app.use(express.json())

//routes 
app.use("/api/contact", contactRoutes)

// custome middlware
app.use(errorHandler)


//server
app.listen(port, (error)=>{
    if (error) {
        console.log(error)
    }
    else{
        console.log("server running")
    }
})


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
