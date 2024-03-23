
const asyncHandler = require("express-async-handler");
const contactModel = require('../models/contactModel');


// get all contacts
const getContact=asyncHandler(async(req, res)=>{
    const contacts = await contactModel.find({user_id:req.user.id});
    res.json(contacts);
});

// add contact
const addContact = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
    const contact = await contactModel.create({
      name,
      email,
      phone,
      user_id: req.user.id,
    });
  
    res.status(201).json(contact);
  });

//   get contact by Id
const getContactById=asyncHandler(async(req, res)=>{
    const contact = await contactModel.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    res.json(contact)
 });

//  update contact

const updateContact =asyncHandler(async(req, res)=>{
    const contact = await contactModel.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    const updatedContact = await contactModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.json(updatedContact)
});
  
// Delete contact
const deleteContact =asyncHandler(async (req,res)=>{
    const contact = await contactModel.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    await contactModel.deleteOne({ _id: req.params.id });
    res.json(contact)
})

module.exports = { getContact, addContact, getContactById, updateContact, deleteContact }