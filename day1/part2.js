var part1 = require('./part1');
function mapWithResult(cb){
	return this.reduce((result,current,index) => {
		result[index] = cb(current, index, result);
		return result;
	}, []);
}

var sumAlong = (current, index, arr) => part1.sum(current, arr[index-1] || 0);
var getFirstTimeAt = (level, input) => mapWithResult.call(part1.getSteps(input), sumAlong).indexOf(level) + 1;
var getFirstTimeAtBasement = getFirstTimeAt.bind(null, -1);
module.exports = getFirstTimeAtBasement;

