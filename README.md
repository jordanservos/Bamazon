# Bamazon - an Amazon-like storefront

## Overview
In this activity, I created an Amazon-like storefront with the MySQL skills we learned in this unit. The app will take in orders from customers and deplete stock from the store's inventory. 

Bamazon also uses MySQL and Inquirer npm packages for data input and storage.

## Built With/Installations Required

* [Node.js] (https://nodejs.org/en/)
* [JavaScript] (https://www.javascript.com/)
* [MySQL npm package] (https://www.npmjs.com/package/mysql)
* [Inquirer npm package] (https://www.npmjs.com/package/inquirer)

### Commands

1. `node bamazoncustomer.js`
    * This command executes the program

![Execute](Screen Shot 2020-03-04 at 3.57.59 PM.png)


2. `node liri.js spotify-this-song <song-name>`
    * This command searches the Spotify Web API that runs on Node.js (`spotify.search({type: "track", query: userQuery}, function(err, data)`) and returns information about the song the user input. It includes `Artist: `, `Song Name: `, and `Preview Link: `, and `Album: `. If no artist is entered, the API automatically searches "The Sign" by Ace of Base for the user.

    ![Default Song Output](screenshots/default-spotify-output.png)

    ![Example Song Output](screenshots/example-song-output.png)

3. `node liri.js movie-this <movie-name>`
    * This command searches the OMDB API through Axios (`"http://www.omdbapi.com/?t=" + userQuery + "&y=&plot=short&apikey=" + keys.movies.id`) and returns information about the movie the user input. It includes `Title: `, `Year Released: `, `IMDB Rating: `, `Rotten Tomatoes Rating: `, `Country/Countries Produced: `, `Language: `, `Plot: `, and `Cast: `. If no movie is entered, the API automatically searches Mr. Nobody for the user, as well as letting them know that they should check it out, notifying the user that it's on Netflix, and providing a link to the IMDB page for the movie.

    ![Default Movie Output](screenshots/default-movie-output.png)

    ![Example Movie Output](screenshots/example-movie-output.png)

4. `node liri.js do-what-it-says`
    * Using the `fs` Node package, LIRI accesses the text in random.txt and uses that to call one of LIRI's commands for the user. It runs `spotify-this-song` for "I Want it That Way" by the Backstreet Boys, but can also be modified to search for a specific movie for movie-this, or a specific artist for concert-this.

    ![Do What It Says Output](screenshots/do-what-it-says.png)

5. `node liri.js`
    * If no other user input is registered, the terminal returns the message `Please enter a valid search term, such as {concert-this}, {spotify-this-song}, {movie-this}, or {do-what-it-says}"`.

    ![Default Output](screenshots/default-output.png)
