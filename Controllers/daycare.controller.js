const Daycare = require('../models/daycare.model');

const createDaycare = async (req, res) => {
    if (req.body) {
        const daycare = new Daycare(req.body);
        daycare.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllDaycares = async (req, res) => {
    await Daycare.find({}).populate('daycares', 'owner pet email days')

        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getDaycareById = async (req, res) => {
    await Daycare.findOne({ _id: req.params.id })
        .then(results => {
            if (results != null) {
                res.json({
                    status: "successful",
                    results: results
                });
            } else {
                res.json({
                    status: "successful",
                    description: "No daycare requests found"
                });
            }
        })
        .catch(err => {
            res.json({
                status: "error",
                description: err
            })
        });
};

module.exports = {
    createDaycare,
    getAllDaycares,
    getDaycareById
};