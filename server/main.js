import { Meteor } from 'meteor/meteor';
import http from 'http';
import socket_io from 'socket.io';
const PORT = 10000;

// Meteor.startup(() => {
//   // code to run on server at startup
//   const server = http.createServer();
//   const io = socket_io(server);
//
//   let counter = 0;
//
//   // New client
//   io.on('connection', function(socket) {
//     console.log('new socket client');
//     socket.emit('news', { hello: 'world' });
//     socket.write("{ hello: 'world' }");
//     socket.on('my other event', function (data) {
//       console.log(data);
//     });
//     socket.on('req_custom_msg', function (data) {
//       console.log(data);
//       console.log(data.msg);
//     });
//   });
//
//   // Start server
//   try {
//     server.listen(PORT);
//   } catch (e) {
//     console.error(e);
//   }
// });

Meteor.startup(() => {
  var net = require('net');

  var server = net.createServer(function(socket) {
    // socket.write("Hi, I'm SERVER ");
    // socket.pipe(socket);

    socket.on('data', function(data) {
      console.log('Received: ' + data);
      // server.destroy(); // kill client after server's response
    });


    // socket.setKeepAlive(true, 1000)
    // socket.on('error', (err) => {
    //   console.log(err);
    //   throw err;
    // });

  });

  server.listen(5019, '127.0.0.1');




  // i=0;
  // Meteor.setInterval(()=>{
  //   server.write(`Server ${i++}`)
  // }, 1000)c

  /*
  And connect with a tcp client from the command line using netcat, the *nix
  utility for reading and writing across tcp/udp network connections.  I've only
  used it for debugging myself.
  $ netcat 127.0.0.1 1337
  You should see:
  > Echo server
  */
});