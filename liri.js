require("dotenv").config();

let keys = require("./keys.js");

let axios = require("axios");
let moment = require('moment');
let Spotify = require('node-spotify-api')

let command = process.argv[2];
let input = process.argv[3];


let spotify = new Spotify(keys.spotify)


switch (command) {
    case "concert-this":
        if (input === undefined) {
            input = "Metallica";
        }
        axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp").then(
            function (response) {
                console.log(input + "'s next 3 events are:" + "\n")
                for (let i = 0; i < 3; i++) {
                    console.log("Venue name: " + response.data[i].venue.name);
                    console.log("Venue location: " + response.data[i].venue.country);
                    console.log("Date of event: " + moment(response.data[i].datetime).format("MM/DD/YYYY") + "\n");
                }
            }
        );
        break;

    case "spotify-this-song":
        spotify.search({ type: 'track', query: input }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Song: " + data.tracks.items[0].name);
            console.log("Link to song: " + data.tracks.items[0].external_urls.spotify);
            console.log("Album: " + data.tracks.items[0].album.name);
        })

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

