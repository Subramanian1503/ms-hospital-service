// Define express to initialize routes
const express = require("express");

// Get the router object from express library
const router = express.Router();

// Get the doctor controller to be used in router mapping
const doctor_controller = require("../controllers/doctor");

// Define server route URLS
router.post("/register", doctor_controller.create);
router.post("/login", doctor_controller.login_doctor);

// Export the router to be acknowldged to the express application
module.exports = router;