const express = require("express");

const router = express.Router();

// Configuring middle ware to use other 
const doctor_router = require("./doctor");
router.use("/doctors", doctor_router);

const patient_router = require("./patient");
router.use("/patients", patient_router);

module.exports = router;