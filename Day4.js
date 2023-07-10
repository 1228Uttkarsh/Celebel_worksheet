// let http = require('http')

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.end('Hello World!');
// }).listen(8080);


// //Creating my own module to print the current date and Time
let http = require('http')
let dt = require('./myFirstModule')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("The date and time are currently:"+ dt.myDateTime());
    res.end()
})