console.log("LIRI Bot is ready to go.");

const fs = require('fs');
var Twitter = require('twitterKeys');
var Spotify = require('spotify');
const keys = require('./keys.js');
var twit = new Twitter(keys);
var command = process.agrv[2]
var parameters = {
	'screen_name': 'hajibdajaj',
	'count': 20
}

//code for Twitter 'my-tweets' Command
if (command === 'my-tweets') {
	twit.get('statuses/user_timeline', parameters, gotData);
	function gotData(error, data, response){
		var tweets = data;
		for (var i = 0; i < tweets.length; i++){
			console.log(tweets[i].text);
			console.log(tweets[i].created_at);
		}
	}
}

//code for Spotify 'spotify this song' Command
else if (command === 'spotify-this-song') {
	console.log()
}

//code for Movie 'movie-this' Command
else if (command === 'movie-this') {
	console.log()
}

//code for 'do-what-it-says' Command
else if (command === 'do-what-it-says') {
	console.log()
}