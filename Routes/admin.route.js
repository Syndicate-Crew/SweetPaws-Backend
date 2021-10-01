const controller = require("../Controllers/admin.controller");
const router = require("express").Router();
const auth = require("../Middleware/adminAuth");
const upload = require("../Middleware/image.middleware").upload;

router.route("/").get(controller.get);

router.route("/checkAdmin").get(controller.validate);

router.route("/:id").get(controller.getById);

router.route("/SignIn").post(controller.signIn);

router.route("/SignUp").post(upload.single("image"),controller.create);

router.route("/auth").post(auth, controller.auth)

router.route("/imageUpdate").put([auth, upload.single("image")], controller.updateImage);

router.route("/infoUpdate").put(auth, controller.updateInfo);

router.route("/passwordUpdate").put(auth, controller.changePassword);

router.route("/updateUserInfo/:id").put(controller.adminUpdateInfo);

router.route("/updateUserImage/:id").put(upload.single("image"), controller.adminUpdateImage);

router.route("/updateUserPassword/:id").put(controller.adminChangePassword);

module.exports = router;

