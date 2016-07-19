var gulp = require('gulp');
var webdriver = require('gulp-webdriver');
var path = require('path');
var exec = require('child_process').exec;
var minimist = require('minimist');


var tags = ['~@unit'];
var isWin = /^win/.test(process.platform);
var cmd = isWin ? 'wdio.cmd' : 'wdio';



function processConf(conf) {
    var fullConfPath = path.resolve(__dirname, conf).replace('.js','');
    var config = require(fullConfPath).config;
    var argv = minimist(process.argv.slice(2));

    if(argv.tags) {
        tags = tags.concat(argv.tags.split(','));
    }
    if (config.defaultTags) {
        tags = tags.concat(config.defaultTags);
    }

    var cucumberOpts = config.cucumberOpts;
    cucumberOpts.tags = tags;

    return gulp.src(conf)
        .pipe(webdriver({
            wdioBin: path.join(__dirname, 'node_modules', '.bin', cmd),
            cucumberOpts: cucumberOpts
        }));
}

gulp.task('cucumber', function() {
    return processConf('test/functional/conf/cuke.conf.js');
});

gulp.task('cucumber-phantom', function() {
    return processConf('test/functional/conf/cuke.phantom.conf.js');
});

gulp.task('selenium', function() {
    var isWin = /^win/.test(process.platform);
    var executable = isWin ? 'node_modules/chromedriver/lib/chromedriver/chromedriver.exe' : 'node_modules/chromedriver/bin/chromedriver';
    var command = 'java -jar test/functional/tools/selenium-server-standalone-2.43.1.jar -log ../seleniumLog.txt -Dwebdriver.chrome.driver=' + path.resolve(__dirname, executable);
    seleniumServer = exec(command, function() {
        seleniumServer = null;
    });
});