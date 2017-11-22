const Teacher = require('../src/teacher');

module.exports = (_id) => {
  return Teacher.remove({ _id });
};
