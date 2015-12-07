var common = require('./common');

var getCount = (input) => common.getUniqueHouses(common.getMoves(input)).length;

module.exports = getCount;