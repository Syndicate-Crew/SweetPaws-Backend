const Cpay = require('../Models/channelpay.model');

//create payment
const createPay = async (req,res) => {

    if(req.body){
        const cpay = new Cpay(req.body);
        await cpay.save()
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
    }
}

//get all payment
const getAllPays = async (req,res) => {
    await Cpay.find({})
    .then(data =>{
        res.status(200).send({ data: data });
    })
    .catch(error => {
        res.status(500).send({ error: error.message });
    });
}

//get  payment between two date
const getmonthPays = async (req,res) => {

    let startdate = req.params.one
    let enddate = req.params.two

    // console.log(req.params.one)
    // console.log(req.params.two)

    await Cpay.find( {date:{$gte:(startdate),$lt:(enddate)}} )
    .then(data =>{
        res.status(200).send({ data: data });
    })
    .catch(error => {
        res.status(500).send({ error: error.message });
    });
}



module.exports = {
    createPay,
    getAllPays,
    getmonthPays,
};