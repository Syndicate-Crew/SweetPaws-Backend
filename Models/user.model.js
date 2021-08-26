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
    breed: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
});
module.exports = mongo.model("user", User);