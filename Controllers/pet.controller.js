const pet = require("../Models/pet.model");

const create = async (req, res) => {

    const newPet = new pet({
        name: req.body.name,
        type: req.body.type,
        breed: req.body.breed,
        age: req.body.age,
        description: req.body.description
    });

    await newPet.save()
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
    await pet.find()
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
                    description: "No Pet Found!"
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
    await pet.findOne({ _id: req.params.id })
        .then(results => {
            if (results != null) {
                res.json({
                    status: "Successful!",
                    results: results
                });
            } else {
                res.json({
                    status: "Successful!",
                    description: "No Pets Found!"
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
    await pet.findOneAndRemove({ _id: req.params.id })
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
    await pet.findOneAndUpdate({ _id: req.params.id }, req.body).
        then(result => {
            if (result == null) {
                res.json({
                    status: "Unsuccessful!",
                    description: "Pet not found!"
                });
            } else {
                workshop.findOne({ _id: req.params.id }).then(result => {
                    res.status(200).json({
                        status: "Successful!",
                        results: result
                    })
                })
            }
        })
        .catch(err => {
            res.json({
                status: "Error",
                description: err
            });
        });
};

module.exports = { create, get, getById, remove, update };
