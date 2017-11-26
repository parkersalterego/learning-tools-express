const Student = require('../../src/student');

module.exports = () => {
    const student = new Student();

    return Student.save();
};