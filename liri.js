'use strict';

//Set up some requirements for the program
require("dotenv").config();
let keys = require("./keys.js");
let axios = require("axios");
let moment = require('moment');
let Spotify = require('node-spotify-api')
let fs = require('fs');
let spotify = new Spotify(keys.spotify)

let command = process.argv[2];
let input = process.argv.slice(3).join(" ")

//this function will log the input into log.txt

let logInput = function (command, input) {
    let loggedText = command + "," + input + "\n";
    fs.appendFile("./log.txt", loggedText, function (err) {
        if (err) { console.log(err); }
        else { console.log("Content logged!"); }
    });
}

//This switch statement branches out into particular queries depending on the command

//This is in a function so that do-what-it-says can call it recursively
let liriBranch = function (command, input) {

    switch (command) {
        case "concert-this":
            if (!input){
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
            if (!input){
                input = "The Sign";
            }
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
            if (!input) {
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

            fs.readFile("random.txt", "utf8", function (error, data) {

                if (error) {
                    return console.log(error);
                }

                let textArray = data.split(",");
                command = textArray[0];
                input = textArray[1];

                liriBranch(command, input);
            });
            break;
        default:
            break;
    }
    logInput(command, input);
}

liriBranch(command, input);