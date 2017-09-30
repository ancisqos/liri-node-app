# liri-node-app

## Overview

LIRI (Language Interpretation and Recognition Interface) is a command line application run through Node JS. It takes in parameters and gives you back data.

## Walkthrough

1. In terminal/bash, run "git clone https://github.com/ancisqos/liri-node-app.git" and then change into the app's directory.

2. Once in the directory, run 'node (or preferably, nodemon) liri.js' to begin the server.

	<img src="/img/pic1.PNG" alt=sql-1>

3. LIRI takes in 2 commands: 
	* 'my-tweets'
	* 'movie-this'

4. 'my-tweets' will pull the most recent tweets from the Twitter account specified in the parameters variable. Run 'nodemon liri.js my-tweets' and the tweets will display in the command line.

	<img src="/img/pic2.PNG" alt=sql-1>

5. 'movie-this' uses the OMDB API to pull movie information based on certain parameters. We will be searching by movie name.

6. Run 'nodemon liri.js movie-this NAME OF MOVIE' and it will show you information about the movie.

	<img src="/img/pic3.PNG" alt=sql-1>
