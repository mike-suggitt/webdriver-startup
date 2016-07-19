
export default function() {
    this.Given(/^I click( the)? "([^"]*)"$/, function(ignore, selector) {
        selector = this.getSelector(selector);
        this.client.click(selector);
    });
}