const mongo = require("mongoose");

const Cat = new mongo.Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
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
module.exports = mongo.model("Cat", Cat);