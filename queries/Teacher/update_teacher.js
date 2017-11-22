const Teacher = require('../src/teacher');

module.exports = (_id, teacherProps) => {
  return Teacher.update({ _id }, teacherProps);
};
