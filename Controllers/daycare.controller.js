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

const updateDaycare = async (req, res) => {
    await Daycare.findOneAndUpdate({ _id: req.params.id }, req.body).
        then(result => {
            if (result == null) {
                res.json({
                    status: "Unsuccessful!",
                    description: "No Daycare Found!"
                });
            } else {
                Daycare.findOne({ _id: req.params.id }).then(result => {
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

const deleteDaycare = async (req, res) => {
    await Daycare.findOneAndRemove({ _id: req.params.id })
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

module.exports = {
    createDaycare,
    getAllDaycares,
    getDaycareById,
    updateDaycare,
    deleteDaycare
};