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

//get only pending appointment

const getPendingApps = async (req,res) => {
    await Capp.find({action:"Pending"})  
    .then(data =>{
        res.status(200).send({ data: data });
    })
    .catch(error => {
        res.status(500).send({ error: error.message });
    });
}

//Update Specific Appointment

const updateApp = async (req,res) => {
    await Capp.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (error)=>{
            if(error){
                return res.status(500).json({
                    error:error
                });
            }
            return res.status(200).json({
                success:"Update Successfully"
            })
        }
    );
}

module.exports = {
    createApp,
    getAllApps,
    getPendingApps,
    updateApp,
};