var express = require('express');
var app = express();
var path = require('path');
const csvdata = require('csvdata')

app.use(express.static(__dirname + '/script'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
	res.sendFile(path.join(__dirname, 'script'));
	
});
app.listen(process.env.PORT || 7000);	