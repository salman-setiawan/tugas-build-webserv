const mongoose = require("mongoose")

const timestamps = {
    timestamps : true
}

const participantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1,
        max: 50
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        max: 50
    },
    phone: {
        type: Number,
        max: 13
    },
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'courses'
        }
    ],
}, timestamps);


const participantModel = mongoose.model("participants", participantSchema)
module.exports = participantModel