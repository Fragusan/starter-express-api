const express = require("express");
const router = express.Router();
const controller = require("../controller/indexController");

router.post("/", controller.user.getAll);
router.post("/new", controller.user.createNew);
module.exports = router;