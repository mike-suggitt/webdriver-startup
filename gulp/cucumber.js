var gulp = require('gulp');
var webdriver = require('gulp-webdriver');
var selenium = require('selenium-standalone');
var path = require('path');
var exec = require('child_process').exec;
var minimist = require('minimist');

module.exports = function (conf) {

    var tags = ['~@unit'];
    var isWin = /^win/.test(process.platform);
    var cmd = isWin ? 'wdio.cmd' : 'wdio';

    var fullConfPath = path.resolve(process.cwd(), conf).replace('.js', '');
    var config = require(fullConfPath).config;
    var argv = minimist(process.argv.slice(2));

    if (argv.tags) {
        tags = tags.concat(argv.tags.split(','));
    }
    if (config.defaultTags) {
        tags = tags.concat(config.defaultTags);
    }

    var cucumberOpts = config.cucumberOpts;
    cucumberOpts.tags = tags;

    var returnPipe = gulp.src(conf)
        .pipe(webdriver({
            wdioBin: path.join(__dirname, 'node_modules', '.bin', cmd),
            cucumberOpts: cucumberOpts
        }))
    
    if (!config.remote) {
        returnPipe = returnPipe.once('end', () => {
            selenium.child.kill()
        });
    }
    return returnPipe;
};