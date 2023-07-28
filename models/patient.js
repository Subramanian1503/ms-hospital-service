// Get mongoose library to define schema and modal
const mongoose = require("mongoose")

// Define the schema
const patientModel = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

// Convert the schema into model
const Patient = mongoose.model("Patient", patientModel);

// Export the created modal
module.exports = Patient;