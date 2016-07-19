var world = require('../support/world');

var sampleSteps = function () {
    this.World = world;

    this.Given(/^I run a sample test$/, function (next) {
        return this.client
            .url('http://www.google.co.uk')
            .setValue('#lst-ib', 'potravinydomov')
            .click('button.lsb')
            .elements('.srg .g', function(result) {
                return this.expect(result.value.length).to.be.at.least(parseInt(1, 10));
            }.bind(this));
    });
};

module.exports = sampleSteps;