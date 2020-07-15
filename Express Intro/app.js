//handling http post

var express = require ("express");
var bodyparser = require("body-parser");
var app = express();

// to convert our data from the uri to server (html)
// with the help of bodyparser as a middleware
// that actually parse the data in the standard format
// usually json or xml

// All middleware will populate the 'req.body' 
// property with the parsed body

app.use(bodyparser.urlencoded({extended: false}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/submit-data", function(req,res){
    var name = req.body.firstname + " " + req.body.lastname;
    res.send("Welcome "+ name + "!!");
})

var server = app.listen(5000,function(){
    console.log("Node server is running at port 5000");
})
