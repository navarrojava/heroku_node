//Lets require/import the HTTP module
var http = require('http');
var externalip =require('externalip');

var publicIp= "";

externalip(function (err, ip) {
	publicIp = ip;
  console.log(publicIp); // => 8.8.8.8
});

//Lets define a port we want to listen to
//const PORT=80; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('Backend teste SelfSecurity, voce esta no path: ' + request.url + ' public ip: ' + publicIp);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in mode", this.address().port);
});




// //Lets require/import the HTTP module
// var http = require('http');

// //Lets define a port we want to listen to
// //const PORT=80; 

// //We need a function which handles requests and send response
// function handleRequest(request, response){
//     response.end('Backend teste SelfSecurity, voce esta no path: ' + request.url);
// }

// //Create a server
// var server = http.createServer(handleRequest);

// //Lets start our server
// server.listen(process.env.PORT || 3000, function(){
//   console.log("Express server listening on port %d in mode", this.address().port);
// });
