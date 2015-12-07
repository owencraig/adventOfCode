var flatten = (arrayOfArrays) => arrayOfArrays.reduce((total, current) => total.concat(current));
var multiply = (a, b) => a * b;
var sum = (a, b) => a + b;

var head = (arr) => arr[0];
var tail = (arr) => arr.slice(1);

var pushAndReturnArray = (array, value) => array.push(value) && array; // since push will always return at least 1 for the length
var reduceToArray = (transform, result,current, index, array) => pushAndReturnArray(result, transform(current, index, array, result));
var mapWithResult = (input, transform) => input.reduce(reduceToArray.bind(null, transform), []);

var isFirstOccurence = (value, index, array) => array.indexOf(value) === index;
var unique = (array) => array.filter(isFirstOccurence);

module.exports = {
	flatten: flatten,
	multiply: multiply,
	sum: sum,
	head: head,
	tail: tail,
	mapWithResult: mapWithResult,
	unique: unique
};
