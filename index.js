var day  = process.argv[2];
var part = process.argv[3]
var input = process.argv[4];

if(!(day && part && input)){
	console.error('incorrect arguments specified, should be of form node <app> <day> <part> <input>');
	process.exit(1);
}

var module = require(`./${day}/${part}`);
console.log(module(input));