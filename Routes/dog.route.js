const controller = require("../controllers/dog.controller");
const router = require("express").Router();

router.route("/").post(controller.create);

router.route("/").get(controller.get);

router.route("/:id").get(controller.getById);

router.route("/:id").delete(controller.remove);

router.route("/:id").put(controller.update);

module.exports = router;