const mongoose = require('mongoose')

const CSlotSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  vcharge: { type: String, required: true },
  roomno: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  hcharge: { type: String, required: true }
})

const Cslot = mongoose.model('Cslot', CSlotSchema)
module.exports = Cslot
