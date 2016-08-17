// var world = require('../support/world');
//
// var steps = [
//     require('./before.steps'),
//     require('./action.steps'),
//     require('./form.steps'),
//     require('./navigation.steps'),
//     require('./verify.steps'),
//     require('./utils.steps'),
//     require('./window.steps')
// ];
//
// module.exports = function() {
//     this.World = world;
//
//     steps.forEach(function(step) {
//         if(step.call) {
//             step.call(this);
//         }
//         else {
//             step.default.call(this);
//         }
//     }.bind(this));
// };
//
