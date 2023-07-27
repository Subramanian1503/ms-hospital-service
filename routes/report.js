const express = require("express");
const router = express.Router();
const report_controller = require("../controllers/report");


router.get("/:status", report_controller.getAllReportsByStatus);

module.exports = router;