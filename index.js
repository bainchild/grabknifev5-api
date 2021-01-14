const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const WebSocket = require('ws');
const WebSocket = require('ws');
const server = new WebSocket.Server({
  port: 1234
});
let sockets = [];
server.on('connection', function(socket) {
  sockets.push(socket);

  // When you receive a message, send that message to every socket.
  socket.on('message', function(msg) {
    console.log(msg)
    if(msg == "test"){
        socket.send("l")
    }
  });

  // When a socket closes, or disconnects, remove it from the array.
  socket.on('close', function() {
    sockets = sockets.filter(s => s !== socket);
    console.log("Socket closed")
  });
});
app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("app listening at http://%s:%s", host, port)
})
