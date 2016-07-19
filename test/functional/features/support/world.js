var expect = require('chai').expect;
var assert = require('chai').assert;
var webdriverio = require('webdriverio');
var config = require('./config');

function World() {
    'use strict';

    this.assert = assert;
    this.expect = expect;
    this.client = browser;

    function processSelector(selector) {
        var combinedSelector = '';
        var subSelectors = selector.replace(/\s/ig, '');
        subSelectors = subSelectors.replace('.', ' ');
        subSelectors = subSelectors.split('|');
        for(var i=0;i<subSelectors.length;i++) {
            var resolvedSelector = getSelector(subSelectors[i]);
            if(resolvedSelector.indexOf('|') > -1) {
                combinedSelector += processSelector(resolvedSelector);
            }
            else {
                combinedSelector += resolvedSelector + ' ';
            }
        }
        return combinedSelector;
    }

    function getSelector(field) {
        var dataSelector = (field.indexOf(' ') > -1) ? '[data-selector*="' : '[data-selector="';
        return config.lookups[field] ? config.lookups[field] : dataSelector + field + '"]';
    }
    this.getSelector = function(field) {
        return processSelector(field);
    };

}
module.exports = World;
//
// class World {
//     constructor() {
//         this.client = browser;
//         console.log('herererere');
//     }
// }
//
// module.exports = function () {
//     this.World = World;
// }