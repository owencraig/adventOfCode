var parse = require('./parseInput'); 
var utils = require('./../utils');

var create2Tuple = (first, second) => first && second?({
	first: first,
	second: second
}):void 0;


var getSurfaceArea = (side) => utils.multiply(side[0], side[1]);
var getSurfaceAreas = (box) => box.map(getSurfaceArea);
var getBoxSurfaceArea = (surfaceAreas) => surfaceAreas.map(utils.multiply.bind(null, 2)).reduce(utils.sum);
var sumSurfaceAreas = (surfaceAreas) => utils.sum(Math.min.apply(null, surfaceAreas), getBoxSurfaceArea(surfaceAreas));
var getRequiredPaper = (box) => sumSurfaceAreas(getSurfaceAreas(box));


var getAnswer = (input) => parse.getDimensions(input, '|').map(parse.getSurfaces).map(getRequiredPaper).reduce(utils.sum);


module.exports = getAnswer;