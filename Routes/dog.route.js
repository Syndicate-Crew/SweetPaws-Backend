const controller = require("../controllers/dog.controller");
const router = require("express").Router();
const upload = require("../Middleware/dog-image-middleware").upload;

router.route("/").post(upload.single("image"), controller.create);

router.route("/").get(controller.get);

router.route("/:id").get(controller.getById);

router.route("/:id").delete(controller.remove);

router.route("/:id").put(controller.update);

router.route("/imageUpdate/:id").put(upload.single("image"), controller.updateImage);

module.exports = router;