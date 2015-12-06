var part1 = require('./part1');

var pushAndReturnArray = (array, value) => array.push(value) && array; // since push will always return at least 1 for the length
var reduceToArray = (transform, result,current, index, array) => pushAndReturnArray(result, transform(current, index, array, result));
var mapWithResult = (input, transform) => input.reduce(reduceToArray.bind(null, transform), []);
var sumAlong = (current, index, _, arr) => part1.sum(current, arr[index-1] || 0);
var getFirstTimeAt = (level, input) => mapWithResult(part1.getSteps(input), sumAlong).indexOf(level) + 1;
var getFirstTimeAtBasement = getFirstTimeAt.bind(null, -1);

module.exports = getFirstTimeAtBasement;

