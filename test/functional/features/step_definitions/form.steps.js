module.exports = function() {
    this.Given(/^I set the "([^"]*)" input value to "([^"]*)"$/, function(selector, value) {
        selector = this.getSelector(selector);
        this.client.setValue(selector, value);
    });
};