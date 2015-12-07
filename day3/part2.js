var common = require('./common'),
	utils = require('../utils');

var getSubsetOfMoves = (areOdd, moves) => moves.filter((_, i) => i%2 === +!!areOdd); // a bit of coercing to bool then to number to take car of things like undefined

var getSantaMoves = getSubsetOfMoves.bind(null, false);
var getRobotMoves = getSubsetOfMoves.bind(null, true);

var getHouses = (moves) => common.getAllHouses(moves);
var getSeperateMoves = (moves) => [getSantaMoves, getRobotMoves].map((func) => func(moves));
var getSeperateHouses = (moves) => getSeperateMoves(moves).map(getHouses);

var getCombinedHouses = (moves) => getSeperateHouses(moves).reduce((first, second) => first.concat(second));

var getResult = (input) => utils.unique(common.getCoords(getCombinedHouses(common.getMoves(input)))).length;

module.exports = getResult;  