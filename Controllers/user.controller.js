const user = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");

const create = async (req,res) => {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt)
    await user.create({
        name: req.body.name,
        email: req.body.email,
        password: password,
        phone: req.body.phone,
        image: req.file.filename

    }).then(result => {

        jwt.sign({user: { id: result.id }}, config.get("jwtsecret"),{ expiresIn: 3600 }, (err, token) => {
            if (err) {
                throw err;
            }
            else {
                res.json({
                    status: "successful",
                    token
                });
            }
        });
    })
    .catch(result => {
        res.json(result);
    })
}

const get = async (req,res) => {
    await user.find().select("-password")
    .then(result => {
        res.json({
            result: result
        })
    })
    .catch(result => {
        res.json(result)
    })
}

const getById = async (req,res) => {
    await user.findOne({_id: req.params.id}).select("-password")
    .then(result => {
        res.json({
            result: result
        })
    })
    .catch(result => {
        res.json(result)
    })
}

const update = async (req,res) => {
    
    if (req.body.password != null && req.body.password.length > 6 ) {
        const salt = await bcrypt.genSalt(10);
        var pass = await bcrypt.hash(req.body.password, salt)
        var query = {
            name: req.body.name,
            email: req.body.email,
            password: pass,
            phone: req.body.phone,
            //image: req.file.filename
        }
        
    } else {
        var query = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
           // image: req.file.filename
        }
    }
    
    await user.updateOne({_id: req.user.id}, query)
    .then(result => {
        res.json({
            status: "successful"
        })
    })
    .catch(err => {
        res.json({
            error: err
        })
    })
}

const signIn = async (req,res) => {
    await user.findOne({email: req.body.email})
    .then(result => {
        if (bcrypt.compareSync(req.body.password,result.password)) {
            jwt.sign({user: { id: result._id }}, config.get("jwtsecret"),{ expiresIn: 3600 }, (err, token) => {
                if (err) {
                    throw err;
                }
                else {
                    res.json({
                        status: "successful",
                        token
                    });
                }
            });
        } else {
            throw Error("Password mismatch");
        }
    })
    .catch(err => {
        res.json({
            error: "Password mismatch"
        });
    })
}

const auth = async (req,res) => {
    await user.findOne({_id: req.user.id}).select("-password")
    .then(result => {
        if (result != null) {
            res.json({
                email: result.email,
                name: result.name,
                phone: result.phone,
                image: result.image
            })
        } else {
            throw Error("Invalid Id");
        }
    })
    .catch(err => {
        res.json({
            error: "Authentication failed"
        });
    })
}

const validate = async (req,res) => {
    await user.findOne({email: req.body.email}).select("email")
    then(result => {
       if (result != null ) { 
           res.json({
               email: "available"
           })
        } else {
            throw Error("E mail already exists");
        }
    }) 
}

module.exports = { create, get, getById, update, signIn, auth, validate}

