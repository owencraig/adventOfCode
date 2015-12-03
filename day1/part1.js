const mapper = {
	')': -1,
	'(': 1
}

var getValue = (char) => mapper[char] || 0;
var sum = (a, b) => a + b;
var getSteps = (str) => str.split('').map(getValue); 
var getEndLevel = (input) => getSteps(input).reduce(sum, 0);
module.exports = {
	getValue: getValue,
	sum: sum,
	getSteps: getSteps,
	getEndLevel: getEndLevel
}

