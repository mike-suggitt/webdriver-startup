# webdriver-startup

A repo tp help getting started with webdriverio and cucumberjs. Includes gulp tasks, profiles and ability to add tags at the command-line.

It also allows for running in phantomJS.

## Installation

run `npm i`

## Running

open a terminal and run `gulp selenium`

open another terminal and run `gulp cucumber` or `gulp cucumber-phantom`

### Tags

In order to run tags via the command line simply add `--tags=@tagname,@anothertagname` in comma-seperated format.

In addition to this you can set defaultTags in profiles using `defaultTags: ['@tag']`
