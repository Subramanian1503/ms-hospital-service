// Get Doctor modal to perform CRUD operations in DB
const Doctor = require("../models/doctor");

// Get constants to be used in the file
const constants = require("../utils/constants");

// Get bcrypt to hash the password that was provided by the user
const bcrypt = require("bcrypt");

// Get the jsonwebtoken that needs to be used to generate jwt tokens for user 
const jwt = require("jsonwebtoken");


// Create a doctor using controller action
module.exports.create = async (request, response) => {
    try {
        // Get required information from request body
        const {
            firstName,
            lastName,
            userName,
            email,
            password,
            confirmPassword,
            phoneNumber
        } = request.body;

        // Validate whether the password and confirm password is matching
        if (password && confirmPassword && password === confirmPassword) {

            // Check if the doctor already exists with same user name
            const isDoctorWithUname = await Doctor.exists({
                userName: userName
            });

            if (isDoctorWithUname) {
                return response.status(400).json({
                    message: constants.USER_EXISTS_ALREADY_WITH_USER_NAME
                });
            }

            // Check if the doctor already exists with same email
            const isDoctorWithEmail = await Doctor.exists({
                email: email
            });

            if (isDoctorWithEmail) {
                return response.status(400).json({
                    message: constants.USER_EXISTS_ALREADY_WITH_EMAIL
                });
            }

            // hash the password
            const hashPassword = bcrypt.hashSync(password, constants.SALT_ROUND);


            // Create doctor using the inputs
            const createdDoctor = await Doctor.create({
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                email: email,
                password: hashPassword,
                phoneNumber: phoneNumber
            });

            // Send JSON response with status 200
            return response.status(200).json({
                message: constants.DOCTOR_CREATION_SUCCESSFULL,
                data: {
                    createdDoctor: createdDoctor
                }
            })
        }

        // Send 400 response says that password does not match with confirm password
        return response.status(400).json({
            message: constants.PASWWORD_DOES_NOT_MATCH_WITH_CONFIRM_PASSWORD,
        })
    }
    catch (error) {
        console.log(`*** Error occurred while trying to register user in: ${error} ***`);

        // throw 500 response if any error occured which is runtime
        return response.status(500).json({
            message: constants.INTERNAL_SERVER_ERROR,
        });
    }
}

// Method to login the user
module.exports.login_doctor = async (request, response) => {
    try {
        // Get user provided inputs from request body
        const {
            email,
            password
        } = request.body;

        // Find the user with provided email
        const requested_doctor = await Doctor.findOne({
            email: email,
        })


        // Check if the passpord is matching
        if (requested_doctor && bcrypt.compareSync(password, requested_doctor.password)) {

            // If yes then generate the jwt token and provide that as response
            const token = jwt.sign({
                email: requested_doctor.email,
                id: requested_doctor.id
            },
                constants.JWT_SECRET_KEY,
                {
                    expiresIn: 60 * 60,
                }
            );

            // Send 200 response
            return response.status(200).json({
                message: constants.DOCTOR_LOGIN_SUCCESSFULL,
                data: {
                    token: token
                }
            });
        }
        else {
            // If no then say 422 with proper error response
            return response.status(400).json({
                message: constants.DOCTOR_LOGIN_INPUTS_INVALID
            })
        }
    } catch (error) {
        console.log(`*** Error occurred while trying to login doctor: ${error} ***`);

        // throw 500 response if any error occured which is runtime
        return response.status(500).json({
            message: constants.INTERNAL_SERVER_ERROR,
        })
    }
}