var utils = require('../utils');

var defaultCoords = (coords) => coords || [0,0];
var coordsToValue = (coords) => coords.join('|');
var valueToCoords = (value) => value.split('|').map((coord) => parseInt(coord, 10));
var movePointer = (xOffset, yOffset, pointer) => [pointer[0] + xOffset, pointer[1] + yOffset];

var moves = {
	'<':movePointer.bind(null, -1, 0),
	'>':movePointer.bind(null, 1, 0),
	'^':movePointer.bind(null, 0, -1),
	'v':movePointer.bind(null, 0, 1)
};

var isFirstOccurence = (value, index, array) => array.indexOf(value) === index;
var unique = (array) => array.filter(isFirstOccurence);

var getMoves = (input) => input.split('');
var mapToNextMove = (value, index, array, result) => moves[value](defaultCoords(result[index-1])); 
var prependFirstHouse = (array) => [defaultCoords()].concat(array);
var getAllHouses = (input) => prependFirstHouse(utils.mapWithResult(getMoves(input), mapToNextMove));
var getUniqueHouses = (input) =>unique(getAllHouses(input).map(coordsToValue)); 
var getCount = (input) => getUniqueHouses(input).length;

module.exports = getCount;