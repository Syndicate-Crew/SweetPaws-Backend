const mongo = require("mongoose");

const Cat = new mongo.Schema({
    name: {
        type: String,
        require: true
    },
    breed: {
        type: String,
        require: true
    },
    age: {
        type: String,
        require: true
    },
    size: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    goodWith: {
        type: String,
        require: true
    },
    careBehaviour: {
        type: String,
        require: true
    },
    coatLength: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    about: {
        type: String,
        require: true
    },
});
module.exports = mongo.model("Cat", Cat);