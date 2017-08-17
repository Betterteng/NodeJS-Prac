var http = require('http');

/*
* request - information about user's request
* (What information they're trying to get or What web page they are trying to connect to)
*
* response - is the object that we can send back to them
* */
function onRequest(request, response) {
    // It first sends a request for whatever page they are looking for,
    // and it also make another request for the favicon （这样做是为了让server知道到底是什么东西发的request）
    console.log("A user made a request" + request.url);
    response.writeHead(200, {"Context-Type": "text/plain"});
    response.write("Here is the data.");
    response.end();
}

// Listen for user's request
http.createServer(onRequest).listen(8888);
console.log("Server is now running...");