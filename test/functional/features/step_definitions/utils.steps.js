export default function() {
    var index = 0;

    this.Given(/^I wait (\d+) seconds?$/, function (seconds) {
        this.client.pause(seconds * 1000);
    });

    this.Given(/^I take a screenshot$/, function () {
        this.client.saveScreenshot('./test/screenshots/' + index++ + '.png');
    });
}