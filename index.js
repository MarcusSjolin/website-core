//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT = process.env.NODE_PORT || 8080;

var app = require("./src/Application")()

var server = app.listen(PORT, function () {
    console.log(app)
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});
