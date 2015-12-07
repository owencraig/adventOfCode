var utils = require('./../utils');

var createPairs = (head, tail) => tail.map((element, _, array) => [head, element]);
var arrayToPairs = (array) => createPairs(utils.head(array), utils.tail(array));
var getSubArray = (_,i, arr) => arr.slice(i);
var getSegmentArray = (array) => array.map(getSubArray); 
var permute = (array) => getSegmentArray(array).map(arrayToPairs);
var getSurfaces = (dimensions) => utils.flatten(permute(dimensions));

var splitLines = (input, separator) => input.trim().split(separator);
var getDimensionArray = (line) => line.split('x').map((i) => parseInt(i, 10));
var getDimensions = (input, separator) => splitLines(input, separator).map(getDimensionArray)

module.exports = {
	getDimensions: getDimensions,
	getSurfaces: getSurfaces
}
