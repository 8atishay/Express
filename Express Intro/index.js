// creating web server
// handling http requests

var express = require ("express");
var app = express();

//define routes here
app.get("/",function(req,res){
    res.send("Hello World")
})

app.get("/user",function(req,res){
    res.send("User Dashboard");
})
//used resteasy app of google chrome
app.post("/user", function(req,res){
    res.send("<h2>This is POST request</h2>");
})
app.put("/user", function(req,res){
    res.send("<h2>This is PUT request</h2>");
})
app.delete("/user", function(req,res){
    res.send("<h2>This is DELETE request</h2>");
})

var server = app.listen(5000,function(){
    console.log("Node server is running at port 5000");
})


// var http = require("http");
// var server = http.createServer(function(req,res){
//     //handle incoming request
//     if(req.url=="/"){
//         // status code: 200 = OK
//         //              404 = Page not found
//         res.writeHead(200,{"Content-Type":"text/plain"});
//         // res.writeHead(200,{"Content-Type":"text/html"});
//         res.write("<h1>This is home page</h1>");
//         res.end();
//     }
//     else if(req.url=="/user"){
//         res.write("This is user page");
//         res.end();
//     }
//     else if(req.url=="/admin"){
//         res.write("This is admin page");
//         res.end();
//     }
//     else if(req.url=="/data"){
//         res.writeHead(200,{"Content-Type":"application/json"});
//         res.write(JSON.stringify({"message":"Hello World"}));
//         res.end();
//     }
//     else{
//         res.write("Invalid Request");
//         res.end();
//     } 
// })

// server.listen(5000);
// console.log('Node web server is running at port 5000')