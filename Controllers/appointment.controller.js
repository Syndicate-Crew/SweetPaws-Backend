const Capp = require('../Models/appointment.model');

//create appointment
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

//get all app
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

//get appointments for specific slot

const getAppForSpecificSlot = async (req,res) => {

    let cappid = req.params.id

    await Capp.find({slotid:cappid})  
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

//delete Specific App
const deleteSpecificApp = async (req, res) => {
    let cappid = req.params.id
    await Capp.findByIdAndRemove(cappid).exec((error, deleteApp) => {
      if (error) {
        return res.status(500).json({ success: false, error })
      }
      return res.status(200).json({
        success: true,
        deleteApp
      })
    })
  }

module.exports = {
    createApp,
    getAllApps,
    getPendingApps,
    getAppForSpecificSlot,
    updateApp,
    deleteSpecificApp,
};