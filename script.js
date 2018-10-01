var express = require('express');
var app = express();
var path = require('path');
//const csvdata = require('csvdata')

app.use(express.static(__dirname + '/script'));
app.use(express.static(__dirname + '/html'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
	res.sendFile(path.join(__dirname, 'script'));
	res.sendFile(path.join(__dirname, 'html'));
	
});
app.listen(process.env.PORT || 8080);	