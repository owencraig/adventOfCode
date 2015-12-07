const mapper = {
	')': -1,
	'(': 1
}

var getValue = (char) => mapper[char] || 0;

var getSteps = (str) => str.split('').map(getValue); 

module.exports = getSteps;