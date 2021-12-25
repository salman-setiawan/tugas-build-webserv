const mongoose = require("mongoose")

const timestamps = {
    timestamps : true
}
const instructorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1,
        max: 100
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
    }
}, timestamps);


const instructorModel = mongoose.model("instructors", instructorSchema)
module.exports = instructorModel