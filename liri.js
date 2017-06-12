const fs = require('fs')

const keysfile = 'keys.js'

var command = process.agrv[2]
var API = //contains data from twitter api call

if (command === 'my-tweets') {
	console.log()
}

fs.readFile(keysfile, 'utf8', function(err, fileContents){
	if (err) {
		return console.error(err)
	}

	var twitterKeys = fileContents.split(',');

	for (var i = o; i < twitterKeys.length; i++) {

		console.log(twitterKeys[i]);
	}
})