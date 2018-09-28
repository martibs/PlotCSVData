var express = require("express");
var bodyParser = require("body-parser");
var app = express();

let filePath = "./data.csv";
let csvData = []

const csvdata = require('csvdata')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendFile("index.html", { root: __dirname });
  //res.sendFile("admin.html", { root: __dirname });
});

csvdata.load(filePath).then(function(data){
	console.log(data);
	csvData = data;
});


app.get('/admin',function(req,res){
	csvdata.load(filePath).then(function(data){
		csvData = data;
		res.send(JSON.stringify(csvData));
	});
});

app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  var email=req.body.email;  
  var data = [{name: req.body.user, password: req.body.password, email: req.body.email}]; //"User name = "+user_name+ ", password = "+password+ ", email = " +email;

  console.log("u= " + user_name+ " p= " +password+ " e= " +email);
  csvdata.write("./data.csv", data, {append: 'true', header: "name,password,email"});

  res.end("yes");
});

//app.listen(process.env.PORT || 3000)

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})

