const express = require("express");
const router = express.Router();
const doctor_controller = require("../controllers/doctor");


router.post("/register", doctor_controller.create);
router.post("/login", doctor_controller.login_doctor);

module.exports = router;