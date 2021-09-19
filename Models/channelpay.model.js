const mongoose = require('mongoose')

const CPaySchema = new mongoose.Schema({

    vcharge: { type: String,  },
    hcharge: { type: String,  },
    date: { type: String,  },
})

const Cpay = mongoose.model('Cpay', CPaySchema)
module.exports = Cpay
