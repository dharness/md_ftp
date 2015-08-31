// server.js

// set up ======================================================================
// get all the tools we need
var express = require('express'),
	app = express(),
	port = process.env.PORT || 8000;

var JSFtp = require("jsftp");

var Ftp = new JSFtp(
{
	host: "104.131.116.161",
	port: 21, // defaults to 21
	user: "root", // defaults to "anonymous"
	pass: "blucakes" // defaults to "@anonymous"
});

Ftp.raw.mkd("/new_dir", function(err, data)
{
	if (err) return console.error(err);

	console.log(data.text); // Show the FTP response text to the user
	console.log(data.code); // Show the FTP response code to the user
});



// routes ======================================================================
require('./app/routes.js')(app) // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port, "127.0.0.1")
console.log('The magic happens on port ' + port)