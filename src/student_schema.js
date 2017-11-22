const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    personalInfo: {
        firstName: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
    },
    classId: {
        type: String,
        required: true
    },
});

module.exports = studentSchema;