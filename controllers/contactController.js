const asyncHandler = require("express-async-handler")
const contact = require("../model/contactModel")
//@desc get all contacts 
//@route /GET
//@access public 

const getContacts = asyncHandler( async  (req, res) => {
    const data = await contact.find();
    res.json(data)
})

//@desc get a contact by Id
//@route /GET
//@access public 

const getContact = asyncHandler( async  (req, res) => {
    res.send(`get contact on id = ${req.params.id}`)
})

//@desc create contact
//@route /POST
//@access public 

const createContact = asyncHandler( async (req, res)=>{
    console.log(req.body)
    const {name, email, phone} = req.body
        if (!name || !email || !phone){
            res.status(400)
            throw new Error("invalid data")
        }

        await contact.create({
            name,
            email,
            phone
        })
        res.send("sucess ")
})
//@desc update contact
//@route /UPDATE
//@access public 

const updateContact = asyncHandler( async (req, res) => {
    const updating = await contact.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).send(`update on ${req.params.id}`) 
})

//@desc delete contact
//@route /DELETE
//@access public 

const deleteContact = asyncHandler( async (req, res) => { 
    const removeContact = await contact.delete(req.params.id)
    res.status(200).send(`delete on ${req.params.id}`) 
})

module.exports = { getContact, getContacts, createContact, updateContact, deleteContact }