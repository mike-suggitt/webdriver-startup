var gulp = require('gulp');
var cucumber = require('./gulp/cucumber');
var selenium = require('./gulp/selenium');

gulp.task('cucumber', ['selenium'], function() {
    return cucumber('test/functional/conf/cuke.conf.js');
});

gulp.task('cucumber-phantom', ['selenium'], function() {
    return cucumber('test/functional/conf/cuke.phantom.conf.js');
});

gulp.task('cucumber-bs', function() {
    return cucumber('test/functional/conf/cuke.browserstack.conf.js');
});

gulp.task('selenium', function (done) {
    return selenium(done);
});


