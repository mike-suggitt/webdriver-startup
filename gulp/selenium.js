var selenium = require('selenium-standalone');

module.exports = function (done) {
    selenium.install({
        logger (message) {
            // process.stdout.write(`${message} \n`)
        },
        progressCb: (totalLength, progressLength) => {
            process.stdout.write(`Downloading drivers ${Math.round(progressLength / totalLength * 100)}% \r`)
        }
    }, function (err) {
        // console.log(err);
        if (err) return done(err);
        selenium.start({
            spawnOptions: {
                stdio: 'ignore'
            }
        }, function (err, child) {
            selenium.child = child;
            // errorLog(err)
            done()
        });
    });
};