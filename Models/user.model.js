const mongo = require("mongoose");

const User = new mongo.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    image: {
        type: Object
    }
});
module.exports = mongo.model("user", User);