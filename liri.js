require("dotenv").config();

let keys = require("./keys.js");

let axios = require("axios");
let moment = require('moment');

let command = process.argv[2];
let input = process.argv[3];


// let spotify = new Spotify(keys.Spotify)
switch (command) {
    case "concert-this":

        break;

    case "spotify-this-song":

        break;

    case "movie-this":
        if (input === undefined) {
            input = "Mr. Nobody";
        }
        axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot-short&apikey=trilogy").then(
            function (response) {
                console.log("Movie title: " + response.data.Title)
                console.log("Movie was released in " + response.data.Year)
                console.log("IMDB rating: " + response.data.Ratings[0].Value);
                console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);
                console.log("This movie was produced in: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot summary: " + response.data.Plot);
                console.log("The cast includes: " + response.data.Actors);
            }
        );
        break;

    case "do-what-it-says":

        break;

    default:
        break;
}

