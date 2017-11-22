const Teacher = require('../src/Teacher');

module.exports = (teacherProps) => {
  const teacher = new Teacher(teacherProps);

  return teacher.save();
};
