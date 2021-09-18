const mongoose = require('mongoose')

const CAppSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  ptype: { type: String, required: true },
  pname: { type: String, required: true },
  page: { type: String, required: true },
  message: { type: String},
  action: { type: String},
  slotid: { type: String},
})

const Capp = mongoose.model('Capp', CAppSchema)
module.exports = Capp
