var connect = require('connect');
var http = require('http');

// It takes requests and response arguments (To determine how they want to handle their request)
// 可以理解为就是一个request
var app = connect();

// If we comment the "next();", then the [doSecond] won't be executed forever
function doFirst(request, response, next) {
    console.log("Bacon");
    next();
}

function doSecond(request, response, next) {
    console.log("Tuna");
    next();
}

app.use(doFirst);
app.use(doSecond);

function profile() {
    console.log("User requested profile.")
}

function forum() {
    console.log("User requested forum");
}

// This is how to deal with users' requests depending on the path
app.use('/profile', profile);
app.use('/forum', forum);

// It takes a requestListener as an argument + port listener
http.createServer(app).listen(8888);
console.log("Server is running...");