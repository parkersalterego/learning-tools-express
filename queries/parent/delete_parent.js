const Parent = require('../../src/parent');

module.exports = (_id) => {
    return Parent.remove({ _id });
};