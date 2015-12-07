var utils = require('../utils');
var getSteps = require('./parseInput');


var getEndLevel = (input) => getSteps(input).reduce(utils.sum);
module.exports = getEndLevel;

