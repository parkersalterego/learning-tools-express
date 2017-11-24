const Student = require('../../src/student');

module.exports = () => {
    const student = new Student();

    return student.save();
};