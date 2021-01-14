const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const WebSocket = require('ws');
const wserver = new WebSocket.Server({
  port: 1234
});
let sockets = [];
wserver.on('connection', function(socket) {
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
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
