const mongoose = require("mongoose");

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

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;