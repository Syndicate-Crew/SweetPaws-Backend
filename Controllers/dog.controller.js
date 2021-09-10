const dog = require("../Models/dog.model");

const create = async (req, res) => {

    const newDog = new dog({
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age,
        size: req.body.size,
        gender: req.body.gender,
        goodWith: req.body.goodWith,
        careBehaviour: req.body.careBehaviour,
        coatLength: req.body.coatLength,
        color: req.body.color,
        about: req.body.about,
    });

    await newDog.save()
        .then(results => {
            res.json({
                status: "Successful!",
                results: results
            });
        })
        .catch(err => {
            res.json({
                status: "Error!",
                description: err
            })
        });
};

const get = async (req, res) => {
    await dog.find()
        .then(results => {
            if (Array.isArray(results) && results.length > 0) {
                res.json({
                    status: "Successful!",
                    count: results.length,
                    results: results
                });
            } else {
                res.json({
                    status: "Successful!",
                    description: "No Dog Found!"
                });
            }
        })
        .catch(err => {
            res.json({
                status: "Error!",
                description: err
            })
        });
};

const getById = async (req, res) => {
    await dog.findOne({ _id: req.params.id })
        .then(results => {
            if (results != null) {
                res.json({
                    status: "Successful!",
                    results: results
                });
            } else {
                res.json({
                    status: "Successful!",
                    description: "No Dogs Found!"
                });
            }
        })
        .catch(err => {
            res.json({
                status: "Error!",
                description: err
            })
        });
};

const remove = async (req, res) => {
    await dog.findOneAndRemove({ _id: req.params.id })
        .then(result => res.status(200).json({
            status: "Successful!",
            results: result
        }))
        .catch(err => {
            res.json({
                status: "Error!",
                description: err
            });
        });
};

const update = async (req, res) => {
    await dog.findOneAndUpdate({ _id: req.params.id }, req.body).
        then(result => {
            if (result == null) {
                res.json({
                    status: "Unsuccessful!",
                    description: "No Dogs Found!"
                });
            } else {
                dog.findOne({ _id: req.params.id }).then(result => {
                    res.status(200).json({
                        status: "Successful!",
                        results: result
                    })
                })
            }
        })
        .catch(err => {
            res.json({
                status: "Error!",
                description: err
            });
        });
}

module.exports = { create, get, getById, remove, update };
