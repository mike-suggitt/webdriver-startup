module.exports = function() {

    this.Then(/^I (?:can|should) see "(.*)" at least "(\d+)" times?$/, function (selector, count) {
        selector = this.getSelector(selector);
        var result = this.client.elements(selector);
        this.expect(result.value.length).to.be.at.least(parseInt(count, 10));
    });

    this.Then(/^I (?:can|should) expect "(.*)" text to( not)? "(.*)" "(.*)"$/, function (selector, not, matchers, text) {
        selector = this.getSelector(selector);
        matchers = matchers.split(',');
        var operator = matchers[0];
        var modifier = matchers[1] || '';

        var elementText = this.client.getText(selector);
        if (operator === 'match') {
            text = new RegExp(text, modifier);
        }
        var expect = this.expect(elementText).to;
        if (not) {
            expect = expect.not;
        }
        expect[operator](text);
    });
}