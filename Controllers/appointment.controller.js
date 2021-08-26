const Capp = require('../Models/appointment.model');

const createApp = async (req,res) => {
    if(req.body){
        const capp = new Capp(req.body);
        await capp.save()
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
    }
}

const getAllApps = async (req,res) => {
    await Capp.find({})
    .then(data =>{
        res.status(200).send({ data: data });
    })
    .catch(error => {
        res.status(500).send({ error: error.message });
    });
}



module.exports = {
    createApp,
    getAllApps
};