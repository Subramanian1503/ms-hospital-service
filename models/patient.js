const mongoose = require("mongoose")

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

const Patient = mongoose.model("Patient", patientModel);

module.exports = Patient;