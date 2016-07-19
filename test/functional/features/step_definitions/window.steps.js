export default function() {
    this.Given(/^I set the viewport to "(.*)" by "(.*)"$/, function (w ,h) {
        this.client
            .setViewportSize({
                width: parseInt(w),
                height: parseInt(h)
            });
    });
};