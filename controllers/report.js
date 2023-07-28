const Doctor = require("../models/doctor");
const Patient = require("../models/patient");
const Report = require("../models/report");
const constants = require("../utils/constants");

// Method to create report of patient
module.exports.create = async (request, response) => {

    try {
        // Get all the required inputs from request
        const {
            doctorId,
            status
        } = request.body;

        const patientId = request.params.patientId;

        // Validate whether the patient exists
        const isPatientExists = await Patient.exists({
            _id: patientId
        });

        if (!isPatientExists) {
            return response.status(404).json({
                message: constants.PATIENT_NOT_EXISTS,
            });
        }

        // Validate whether the doctor exists
        const isDoctorExists = await Doctor.exists({
            _id: doctorId
        });

        if (!isDoctorExists) {
            return response.status(404).json({
                message: constants.DOCTOR_NOT_EXISTS,
            });
        }

        // Validate status
        if (!constants.ALLOWED_STATUS.includes(status)) {
            return response.status(400).json({
                message: constants.REPORT_STATUS_INVALID,
            });
        }

        // Create report using the inputs
        const created_report = await Report.create({
            patientId: patientId,
            doctorId: doctorId,
            status: status
        })

        // Send success response with status 200
        return response.status(200).json({
            message: constants.REPORT_CREATION_SUCCESSFULL,
            data: {
                created_report: created_report
            }
        });
    }
    catch (error) {
        console.log(`*** Error occurred while trying to create report in: ${error} ***`);

        // throw 500 response if any error occured which is runtime
        return response.status(500).json({
            message: constants.INTERNAL_SERVER_ERROR,
        });
    }
}

// Method to get all the reports of a patient
module.exports.getAllReports = async (request, response) => {
    try {
        // Get the patient Id from the request
        const patientId = request.params.patientId;

        // Find all the reports of a patient
        const all_reports_of_patient = await Report.find({
            patientId: patientId
        });

        // Send success reponse
        return response.status(200).json({
            message: constants.GET_ALL_REPORTS_SUCCESSFULL,
            data: {
                reports: all_reports_of_patient,
            }
        })

    } catch (error) {
        console.log(`*** Error occurred while trying to get all reports of a patient in: ${error} ***`);

        // throw 500 response if any error occured which is runtime
        return response.status(500).json({
            message: constants.INTERNAL_SERVER_ERROR,
        });
    }
}

// Method to get all repost with requested status
module.exports.getAllReportsByStatus = async (request, response) => {
    try {
        // Get the patient Id from the request
        const status = request.params.status;

        // Find all the reports of a patient
        const all_reports_for_status = await Report.find({
            status: status
        });

        // Send success reponse
        return response.status(200).json({
            message: constants.GET_ALL_REPORTS_SUCCESSFULL,
            data: {
                reports: all_reports_for_status,
            }
        })

    } catch (error) {
        console.log(`*** Error occurred while trying to get all reports of a status in: ${error} ***`);

        // throw 500 response if any error occured which is runtime
        return response.status(500).json({
            message: constants.INTERNAL_SERVER_ERROR,
        });
    }
}