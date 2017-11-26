const Student = require('../../src/student');

module.exports = (_id) => {
    return Student.remove({_id});
};