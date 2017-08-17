/*
* This is the file system module - whenever use the core module, do not use the path at all. Just
* the name of the module. In this way, node will know this is a core module rather your own module
* and it can find a lot faster.
*
* p.s. Whenever you're making your own customized modules, you include the path - dot & forward
* slash.
* */

// The common practice to name the object or the variable the same as the module to clear up any confusion.
var fs = require('fs');

fs.writeFileSync("corn.txt", "Corn is good, corn is life.");

console.log(fs.readFileSync("corn.txt").toString());
console.log(fs.readFileSync("corn.txt"));