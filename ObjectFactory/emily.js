var movies = require('./movies');

var emilyFav = movies();
emilyFav.favMovie = "Emily No.1";

console.log("Emily's favorite movie is: " + emilyFav.favMovie);