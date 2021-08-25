const controller = require("../controllers/pet.controller");
const router = require("express").Router();

router.route("/").post(controller.create);

router.route("/").get(controller.get);

router.route("/id").post(controller.getById);

module.exports = router;