var getSteps = require('./parseInput'),
	utils = require('../utils');



var sumAlong = (current, index, _, arr) => utils.sum(current, arr[index-1] || 0);
var getFirstTimeAt = (level, input) => utils.mapWithResult(getSteps(input), sumAlong).indexOf(level) + 1;
var getFirstTimeAtBasement = getFirstTimeAt.bind(null, -1);

module.exports = getFirstTimeAtBasement;

