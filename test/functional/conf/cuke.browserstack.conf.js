if(!process.env.BS_USER) {
    throw 'You need to set your Browserstack username in the BS_USER environment variable';
}
if(!process.env.BS_KEY) {
    throw 'You need to set your Browserstack key in the BS_KEY environment variable';
}

exports.config = {
    remote: true,
    user: process.env.BS_USER,
    key: process.env.BS_KEY,

    server: 'http://www.google.co.uk/',
    options: {
        format: 'pretty',
        require: 'test/functional/features/step_definitions'
    },


    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        'test/functional/features/app/*.feature'
    ],

    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilties at the same
    // time. Depending on the number of capabilities WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude option in
    // order to group specific specs to a specific capability.
    //
    // If you have trouble getting all important capabilities together check out Sauce Labs
    // platform configurator. A great tool to configure your capabilities.
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [
        {
            'browserName' : 'chrome'
//            'maxInstances' : 1,
//            'shardTestFiles' : true,
//            isMultiremote: true
        }
    ],

    framework: 'cucumber',
    reporters: ['spec'],
    //
    // If you are using Cucumber you need to specify where your step definitions are located.
    cucumberOpts: {
        require: [
            './test/functional/features/step_definitions'
        ],
        // Enable this config to treat undefined definitions as warnings.
        // ignoreUndefinedDefinitions: false,
        format: "pretty"
    }
    // logLevel: 'silent'
};

require('babel-core/register')();