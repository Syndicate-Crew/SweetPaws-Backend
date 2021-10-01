const controller = require("../Controllers/user.controller");
const router = require("express").Router();
const auth = require("../Middleware/auth");
const upload = require("../Middleware/image.middleware").upload;

router.route("/").get(controller.get);

router.route("/checkUser").get(controller.validate);

router.route("/getByName/:name").get(controller.getByName);

router.route("/:id").get(controller.getById);

router.route("/SignIn").post(controller.signIn);

router.route("/SignUp").post(upload.single("image"),controller.create);

router.route("/auth").post(auth, controller.auth)

router.route("/imageUpdate").put([auth, upload.single("image")], controller.updateImage);

router.route("/infoUpdate").put(auth, controller.updateInfo);

router.route("/passwordUpdate").put(auth, controller.changePassword);

module.exports = router;

