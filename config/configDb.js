const mongoose = require("mongoose")

const dbConnection = async () =>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log(connect.connection.host)
    }catch{
        console.log("error")
    }
}
module.exports  = dbConnection