# liri-node-app

### Overview

This Node.js app queries different concert (BandsInTown), music(Spotify), and movie(OMDB) APIs and displays relevant results to the user.  It can load commands from a text file, and logs all queries to a text file as well.  Note that since Spotify API access requires a private key, relevant code is commented out so anyone can quickly clone and test this repository.

It can take in one of 4 commands as parameters:

1. `concert-this` will find and display an artist's next 3 upcoming events, including their dates and locations.

<p align="center">
  <img alt="concert-this screenshot" src=https://github.com/alex-engelmann/liri-node-app/blob/master/screenshots/concert-this.PNG>
</p>

2. `spotify-this-song` will find and display the artist and album of the entered song title

<p align="center">
  <img alt="spotify-this-song screenshot" src=https://github.com/alex-engelmann/liri-node-app/blob/master/screenshots/spotify-this-song.PNG>
</p>

3. `movie-this` will find and display basic information about a movie including the year it was released, ratings, cast, and a short plot summary

<p align="center">
  <img alt="movie-this screenshot" src=https://github.com/alex-engelmann/liri-node-app/blob/master/screenshots/movie-this.PNG>
</p>

4. `do-what-it-says` will run the command it finds on the first line of `random.txt`, which will be one of the above 3

<p align="center">
  <img alt="do-what-it-says screenshot" src=https://github.com/alex-engelmann/liri-node-app/blob/master/screenshots/do-what-it-says.PNG>
</p>

Regardless of which command is ultimately run, the queries are stored locally in a `log.txt` file.  If no input is given to the command, there are defaults in place for all commands (try it to find out!).

<p align="center">
  <img alt="movie-this no input screenshot" src=https://github.com/alex-engelmann/liri-node-app/blob/master/screenshots/movie-this-no-input.PNG>
</p>

### Dependencies

This Node app requires the following NPM modules in order to function properly:

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)
   
