var flatten = (arrayOfArrays) => arrayOfArrays.reduce((total, current) => total.concat(current));
var multiply = (a, b) => a * b;
var sum = (a, b) => a + b;

var head = (arr) => arr[0];
var tail = (arr) => arr.slice(1);

module.exports = {
	flatten: flatten,
	multiply: multiply,
	sum: sum,
	head: head,
	tail: tail
};
