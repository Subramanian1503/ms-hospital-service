const mongoose = require("mongoose");

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

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;