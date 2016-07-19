export default function() {
    this.Given(/^I navigate to "(.*)"$/, function(url) {
        this.client.url(url);
    });
}