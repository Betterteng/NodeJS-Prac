var movies = require('./movies');
// Grab the object
var buckyFav = movies();
// Set Object's property
buckyFav.favMovie = "Bucky No.1";

console.log("Bucky's favorite movie is: " + buckyFav.favMovie);