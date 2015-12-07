var parse = require ('./parseInput'),
	utils = require ('../utils');
	
var getVolume = (box) => box.reduce(utils.multiply);
var getSmallestPerimeter = (surfaces) => Math.min.apply(null, getPerimeters(surfaces));
var getPerimeters = (surfaces) => surfaces.map(getPerimeter);
var getPerimeter = (surface) => utils.multiply(2, surface.reduce(utils.sum));

var getAmountOfRibbonPerBox = (box) => utils.sum(getVolume(box), getSmallestPerimeter(parse.getSurfaces(box))); 
var getRibbonAmounts = (input) => parse.getDimensions(input, '|').map(getAmountOfRibbonPerBox);
var getResult = (input) => getRibbonAmounts(input).reduce(utils.sum);

module.exports = getResult;