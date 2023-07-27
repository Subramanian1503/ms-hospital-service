const express = require("express");
const router = express.Router();
const patient_controller = require("../controllers/patient");


router.post("/register", patient_controller.create);

module.exports = router;