// server.js

// set up ======================================================================
// get all the tools we need
var express = require('express'),
	app = express(),
	port = process.env.PORT || 8000;

var JSFtp = require("jsftp");

var Ftp = new JSFtp(
{
	host: "myserver.com",
	port: 3331, // defaults to 21
	user: "user", // defaults to "anonymous"
	pass: "1234" // defaults to "@anonymous"
});



// routes ======================================================================
require('./app/routes.js')(app) // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port, "127.0.0.1")
console.log('The magic happens on port ' + port)