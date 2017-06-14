// TESTING FILE
console.log("LIRI Bot is ready to go.");

// REQUIRING PROJECT DEPENDENCIES
var fs = require('fs');
var Twitter = require('twitter');
var keys = require('./keys.js');
var omdb = require('omdb');
var request = require('request');

// TESTING TO MAKE SURE KEYS IS IMPORTED SUCCESSFULLY
//console.log(keys)

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

// CONDITIONAL STATEMENT TO RUN TWITTER NPM PACKAGE ---Working
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
} else if (command === 'movie-this') {
    console.log('Netflix and chill?');
    var movieName = process.argv.slice(3).join(" ");
    console.log(movieName);
    var queryUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=40e9cece" + movieName + "&y=&plot=short&r=json&tomatoes=true";
    console.log(queryUrl)
    request(queryUrl, function(error, response, body) {
          if (!error && response.statusCode == 200) {
        var responseJson = JSON.parse(body);
                    console.log("Title: " + responseJson.Title);
                    console.log("Year: " + responseJson.Year);
                    console.log("IMDB Rating: " + responseJson.imdbRating);
                    console.log("Country: " + responseJson.Country);
                    console.log("Language: " + responseJson.Language);
                    console.log("Plot: " + responseJson.Plot);
                    console.log("Actors: " + responseJson.Actors);
                    console.log("Rotten Tomatoes Rating: " + responseJson.tomatoRating);
                    console.log("Rotten Tomatoes URL: " + responseJson.tomatoURL);
                }
            });
}

// // CONDITIONAL STATEMENT TO RUN SPOTIFY PACKAGE ---Not Working

// if (command === spotify - this - song) {
//     console.log('Time to bump some jamz.');

//     var searchTrack;
//     if (secondCommand === undefined) {
//         searchTrack = "The Sign";
//     } else {
//         searchTrack = secondCommand;
//     }

//     spotify.search({ type: 'track', query: searchTrack }, function(err, data) {
//         if (err) {
//             console.log('Error occurred: ' + err);
//             return;
//         } else {
//             console.log("Artist: " + data.tracks.items[0].artists[0].name);
//             console.log("Song: " + data.tracks.items[0].name);
//             console.log("Album: " + data.tracks.items[0].album.name);
//             console.log("Preview Here: " + data.tracks.items[0].preview_url);
//         }
//     });
// };