const Parent = require('../../src/parent');

module.exports = () => {
    const parent = new Parent();

    return Parent.save();
};