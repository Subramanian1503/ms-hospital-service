// Get mongoose library to define schema and modal
const mongoose = require("mongoose");

// Define the schema
const reportSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Patient'
    },
    doctorId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Doctor'
    },
    status: {
        type: String,
        enum: ["Negative", "Travelled-Quarantine", "Symptoms-Quarantine", "Positive-Admit"],
        required: true
    }
}, {
    timestamps: true
});

// Convert the schema into model
const Report = mongoose.model("Report", reportSchema);

// Export the created modal
module.exports = Report;