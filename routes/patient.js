// Define express to initialize routes
const express = require("express");

// Get the router object from express library
const router = express.Router();

// Initialize passport library to check for authentication 
const passport = require("passport");

// Get the patient controller to be used in router mapping
const patient_controller = require("../controllers/patient");

// Define server route URLS
router.post("/register",
    passport.authenticate('jwt', { session: false }),
    patient_controller.create);

// Export the router to be acknowldged to the express application
module.exports = router;