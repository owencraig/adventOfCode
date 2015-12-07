var utils = require('../utils');

var defaultCoords = (coords) => coords || [0,0];
var coordsToValue = (coords) => coords.join('|');

var movePointer = (xOffset, yOffset, pointer) => [pointer[0] + xOffset, pointer[1] + yOffset];

var moves = {
	'<':movePointer.bind(null, -1, 0),
	'>':movePointer.bind(null, 1, 0),
	'^':movePointer.bind(null, 0, -1),
	'v':movePointer.bind(null, 0, 1)
};


var getMoves = (input) => input.split('');
var mapToNextMove = (value, index, array, result) => moves[value](defaultCoords(result[index-1])); 
var prependFirstHouse = (array) => [defaultCoords()].concat(array);
var getAllHouses = (moves) => prependFirstHouse(utils.mapWithResult(moves, mapToNextMove));
var getCoords = (houses) => houses.map(coordsToValue);
var getUniqueHouses = (moves) => utils.unique(getCoords(getAllHouses(moves))); 

module.exports = {
	getAllHouses: getAllHouses,
	getUniqueHouses: getUniqueHouses,
	getMoves: getMoves,
	getCoords: getCoords
}