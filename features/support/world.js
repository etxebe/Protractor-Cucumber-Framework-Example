var World, chai, chaiAsPromised;
chai = require('chai');
chaiAsPromised = require('chai-as-promised');

World = function World(callback) {
    chai.use(chaiAsPromised);
    this.expect = chai.expect;
    chai.config.truncateThreshold = 0;
}

module.exports.World = World;