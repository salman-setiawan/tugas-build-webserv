const mongoose = require("mongoose")

const timestamps = {
    timestamps : true
}

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 1,
        max: 50
    },
    description: {
        type: String,
        required: true,
        min: 1,
        max: 500
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "instructors",
        required: true
    },
    scheduleDateTime: {
        type: Date,
        required: true
    }
}, timestamps);


const courseModel = mongoose.model("courses", courseSchema)
module.exports = courseModel