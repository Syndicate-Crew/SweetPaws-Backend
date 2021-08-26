const controller = require("../Controllers/user.controller");
const router = require("express").Router();
const auth = require("../Middleware/auth")

router.route("/").get(controller.get);

router.route("/checkUser").get(controller.validate);

router.route("/:id").get(controller.getById)

router.route("/").post(controller.create);

router.route("/SignIn").post(controller.signIn);

module.exports = router;

