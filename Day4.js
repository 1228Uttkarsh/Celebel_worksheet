//How to use modules in nodejs.
//require(module_name) function is use to modules

 var http = require('http')
// http.createServer(function(req,res){
//   res.writeHead(200,{'content-Type': 'text/html'});
//   res.end('Hello world');
  
// }).listen(8080);

//Include module -> if user want to use his own module then they can save the js file and use export keyword to use the user defined module outside the module file 
// Below is the example
var dt = require('./myfirstModule')//accessing the module which is created  to use the external module.
//The example is to show the current date and time on the server.
http.createServer(function(req,res){
  res.writeHead(200,{'content-Type':'text/html'});//write a response to client
  res.write("The date and time are currently: "+dt.myDateTime());//write a response to client
  res.end("Completed!")//end the response.
}).listen(8080)//the server object listen on port 8080



/*
    //Here is the code that is saved in myfirstModule is below
    exports.myDateTime = function(){
    return Date();
};
    */
