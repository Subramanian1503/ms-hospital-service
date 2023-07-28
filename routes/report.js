// Define express to initialize routes
const express = require("express");

// Get the router object from express library
const router = express.Router();

// Initialize passport library to check for authentication 
const passport = require("passport");

// Get the patient controller to be used in router mapping
const report_controller = require("../controllers/report");

// Define server route URLS
router.get("/:status", passport.authenticate('jwt', { session: false }), report_controller.getAllReportsByStatus);

module.exports = router;