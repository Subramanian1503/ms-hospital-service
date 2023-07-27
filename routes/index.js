const express = require("express");

const router = express.Router();

// Configuring middle ware to use other 
const doctor_router = require("./doctor");
router.use("/doctors", doctor_router);

const patient_router = require("./patient");
router.use("/patients", patient_router);

const report_router = require("./report");
router.use("/reports", report_router);

const report_controller = require("../controllers/report");
router.post("/patients/:patientId/create_report", report_controller.create);
router.get("/patients/:patientId/all_reports", report_controller.getAllReports);

module.exports = router;