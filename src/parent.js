const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parentSchema = new Schema({
    personalInfo: {
        firstname: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
    },
    loginInfo: {
        email: {
            type: String,
            required: true
        },
        password: { 
            type: String,
            required: true
        }
    },
    student: {
        required: true,
        studentId: [{
            type: String
        }]
    },
});

module.exports = Parent;