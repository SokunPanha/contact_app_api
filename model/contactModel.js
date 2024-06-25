const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    phone: {
        type: String,
        required: [true, "phone number is required"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("contactSchema", contactSchema)