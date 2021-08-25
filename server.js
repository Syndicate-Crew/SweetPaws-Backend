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
const petRoute = require("./Routes/pet.route");
// const daycareRoute = require("./Routes/daycare.route");
// const channelRoute = require("./Routes/channel.route");
// const userRoute = require("./Routes/user.route");
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
router.use("/pet", petRoute);
// router.use("/daycare", daycareRoute);
// router.use("/channel", channelRoute);
// router.use("/user", userRoute);

app.use(config.get("root"), router);
/*****************************************************************************************************************************
 * Execution 
 *****************************************************************************************************************************/
const port = config.get("port");
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});