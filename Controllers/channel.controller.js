const Cslot = require('../Models/channel.model')

//Create Slot
const createSlot = async (req, res) => {
  if (req.body) {
    const cslot = new Cslot(req.body)
    await cslot
      .save()
      .then(data => {
        res.status(200).send({ data: data })
      })
      .catch(error => {
        res.status(500).send({ error: error.message })
      })
  }
}

//Get All Slot
const getAllSlots = async (req, res) => {
  await Cslot.find({})
    .then(data => {
      res.status(200).send({ data: data })
    })
    .catch(error => {
      res.status(500).send({ error: error.message })
    })
}

//Get Specific Slot
const specificSlot = async (req, res) => {
  let cslotid = req.params.id
  await Cslot.findById(cslotid, (error, cslot) => {
    if (error) {
      return res.status(500).json({ success: false, error })
    }
    return res.status(200).json({
      success: true,
      cslot
    })
  })
}

//delete Specific Slot
const deleteSpecificSlot = async (req, res) => {
  let cslotid = req.params.id
  await Cslot.findByIdAndRemove(cslotid).exec((error, deleteSlot) => {
    if (error) {
      return res.status(500).json({ success: false, error })
    }
    return res.status(200).json({
      success: true,
      deleteSlot
    })
  })
}

//Update Specific Slot

const updateSlot = async (req,res) => {
    await Cslot.findByIdAndUpdate(
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
  createSlot,
  getAllSlots,
  specificSlot,
  deleteSpecificSlot,
  updateSlot,
}
