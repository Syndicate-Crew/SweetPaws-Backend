/*****************************************************************************************************************************
* Node Modules
*****************************************************************************************************************************/
const express = require("express");
const router = express.Router();
const cors = require("cors");
const mongo = require("mongoose");
const config = require("config");
/*****************************************************************************************************************************
 * Route Imports
 *****************************************************************************************************************************/
const daycareRoute = require("./Routes/daycare.route");
const dogRoute = require("./Routes/dog.route");
const catRoute = require("./Routes/cat.route");
const userRoute = require("./Routes/user.route");
const cslot = require("./Routes/channel.route");
const capp = require('./Routes/appointment.route');
const cpay = require('./Routes/channelpay.route');

/*****************************************************************************************************************************
 * Database Connection
 *****************************************************************************************************************************/
const app = express();
app.use(express.json());
app.use(cors());

const url = config.get("databaseUrl");

mongo.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
    .catch(err => console.log(err));

const connection = mongo.connection;

connection.once("open", () => {
    console.log("Database connected!");
});
/*****************************************************************************************************************************
 * Routes
 *****************************************************************************************************************************/
router.use("/daycare", daycareRoute);
router.use("/dog", dogRoute);
router.use("/cat", catRoute);
router.use("/user", userRoute);
router.use("/public/profile_pictures", express.static('./public/profile-pictures'));
app.use('/cslot', cslot());
app.use('/capp', capp());
app.use('/cpay', cpay());

app.use(config.get("root"), router);
/*****************************************************************************************************************************
 * Execution 
 *****************************************************************************************************************************/
const port = config.get("port");
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});