// TESTING FILE
console.log("LIRI Bot is ready to go.");

// REQUIRING PROJECT DEPENDENCIES
var fs = require('fs');
var Twitter = require('twitter');
var keys = require('./keys.js');
var omdb = require('omdb');

// TESTING TO MAKE SURE KEYS IS IMPORTED SUCCESSFULLY
console.log(keys)

// TESTING COMMAND
var command = process.argv[2]

// CREATING CLIENT FROM APPLICATION API KEYS
var client = new Twitter({
    consumer_key: keys.consumer_key,
    consumer_secret: keys.consumer_secret,
    access_token_key: keys.access_token_key,
    access_token_secret: keys.access_token_secret
});

// PARAMETERS USED TO ACCESS TWITTER ACCOUNT INFO
var parameters = {
    'screen_name': 'hajibdajaj',
    'count': 20
}

// CONDITIONAL STATEMENT TO RUN TWITTER NPM PACKAGE
if (command === 'my-tweets') {
    console.log('Tweetz comin yo way');
    client.get('statuses/user_timeline', parameters, gotData);

    function gotData(error, data, response) {
        var tweets = data;
        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text);
            console.log(tweets[i].created_at);
        }
    }
};

// CONDITIONAL STATEMENT TO RUN OMDB NPM PACKAGE
if (command === 'movie-this') {
    console.log('Netflix and chill?');
    var movieTitle = process.argv[3];
    request("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&r=json&tomatoes=true", function (error, response, body){

    	

    	
// //code for Movie 'movie-this' Command
// else if (command === 'movie-this') {
// 	console.log()
// }

// //code for 'do-what-it-says' Command
// else if (command === 'do-what-it-says') {
// 	console.log()
// }
