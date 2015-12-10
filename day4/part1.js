var md5 = require('md5');

var getHash = (seed, index) => md5(seed + index);
var getHashFromIndex = (index) => getHash.bind(null, index);
var startsWith = (needle, haystack) => haystack.indexOf(needle) === 0;
var isAnswer = startsWith.bind(null, '00000');


var findTarget = (isValid, getHash, index) => {
	console.log(`index => ${index}, hash => ${getHash(index)}`);
	return isValid(getHash(index))?index: findTarget(isValid, getHash, index + 1); 
};


module.exports = (input) => findTarget(isAnswer, getHashFromIndex(input), 1);

