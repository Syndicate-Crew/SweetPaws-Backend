const mongoose = require('mongoose');

const DaycareSchema = new mongoose.Schema({
    owner: { type: String, required: true, trim: true },
    pet: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    days: { type: Number, required: true },
    packages: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'packages' }]
})

const Daycare = mongoose.model('daycares', DaycareSchema);
module.exports = Daycare;