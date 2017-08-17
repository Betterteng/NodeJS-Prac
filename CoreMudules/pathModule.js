/*
* It's really a good module when you want to work with files.
* It can normalize the path depending on your operating system.
* */
var path = require('path');

// What we need to notice is that we have 2 forward slash in the address, which is a typo (on purpose).
var websiteHome = "Desktop/Bucky//boston/index.html";
var websiteAbout = "Desktop/Bucky/boston/about.html";

// The 2 forward slashes changed into 1
// We can rip out the pieces of information that we want.
console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));

setInterval(function () {
    console.log("beef");
}, 2000);

// Return the path whatever file is currently calling this code
console.log(__dirname);
console.log(__filename);
