const Patient = require("../models/patient");
const constants = require("../utils/constants");

// Create a doctor using controller action
module.exports.create = async (request, response) => {
    try {
        // Get required information from request body
        const {
            firstName,
            lastName,
            phoneNumber,
            age
        } = request.body;

        // Check if the doctor already exists with same user name
        const isPhonenumberExists = await Patient.exists({
            phoneNumber: phoneNumber
        });

        if (isPhonenumberExists) {
            return response.status(400).json({
                message: constants.USER_EXISTS_ALREADY_WITH_PHONE_NUMBER
            });
        }
        else {
            // Create patient using the inputs
            const createdPatient = await Patient.create({
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                age: age
            });

            // Send JSON response with status 200
            return response.status(200).json({
                message: constants.PATIENT_CREATION_SUCCESSFULL,
                data: {
                    createdPatient: createdPatient
                }
            })
        }
    }
    catch (error) {

        console.log(`*** Error occurred while trying to register patient : ${error} ***`);

        return response.status(500).json({
            message: constants.INTERNAL_SERVER_ERROR,
        })
    }
}