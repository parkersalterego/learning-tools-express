const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
  personalInfo:{
    name: {
      firstName:{
        type: String,
        required: true
      },
      lastName:{
        type: String,
        required: true
      },
      photo: base64string;
    }
  },

  logInCredentials:{
    email: {
      type: String,
      required: true,
      validator:{}
    },
    password:{
      type: String,
      required: true,
      validator:{

      }
    }
  },

  permissions:{
    role: roleId,
    validator:{}
  },

  school:{
    district: String,
    city: String,
    state: String,
    schoolName: String,
    validator:{}
  };
});

const Teacher = mongoose.model('teacher', TeacherSchema);

module.exports = Teacher;
