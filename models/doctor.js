// Get mongoose library to define schema and modal 
const mongoose = require("mongoose");

// Define the schema
const doctorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    userName: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Convert the schema into model
const Doctor = mongoose.model("Doctor", doctorSchema);

// Export the created modal
module.exports = Doctor;