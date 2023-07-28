// Define express to initialize routes
const express = require("express");

// Get the router object from express library
const router = express.Router();

// Initialize passport library to check for authentication 
const passport = require("passport");

// Configuring middle ware to use other 
const doctor_router = require("./doctor");
router.use("/doctors", doctor_router);

const patient_router = require("./patient");
router.use("/patients", patient_router);

const report_router = require("./report");
router.use("/reports", report_router);

// Define server route URLS
const report_controller = require("../controllers/report");

router.post("/patients/:patientId/create_report", passport.authenticate('jwt', { session: false }), report_controller.create);
router.get("/patients/:patientId/all_reports", passport.authenticate('jwt', { session: false }), report_controller.getAllReports);

// Export the router to be acknowldged to the express application
module.exports = router;