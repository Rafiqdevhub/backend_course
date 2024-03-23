const express = require("express");
const router = express.Router();
const {
  getContact,
  addContact,
  deleteContact,
  getContactById,
  updateContact,
} = require("../controllers/contactController");


router.route("/").get(getContact).post(addContact);
router.route('/:id').get(getContactById).put(updateContact).delete(deleteContact);
module.exports = router;
