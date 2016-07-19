exports.config = {
    server: 'http://www.google.co.uk/',
    options: {
        format: 'pretty',
        require: 'test/functional/features/step_definitions'
    },
    // =====================
    // Server Configurations
    // =====================
    // Host address of the running Selenium server. This information is usually obsolete as
    // WebdriverIO automatically connects to localhost. Also if you are using one of the
    // supported cloud services like Sauce Labs, Browserstack or Testing Bot you also don't
    // need to define host and port information because WebdriverIO can figure that our
    // according to your user and key information. However if you are using a private Selenium
    // backend you should define the host address, port, and path here.
    //
    host: '127.0.0.1',
    port: 4444,
    path: '/wd/hub',
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
            './test/functional/features/step_definitions/index.steps.js'
        ],
        // Enable this config to treat undefined definitions as warnings.
        // ignoreUndefinedDefinitions: false,
        format: "pretty"
    }
    // logLevel: 'silent'
};

require('babel-core/register')();