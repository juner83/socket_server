// // var cl = function(msg) {
// //   console.log(msg);
// // };
// import http from 'http';
// import socket_io from 'socket.io';
// import { Meteor } from 'meteor/meteor';
//
// const PORT = 8080;
//
// Meteor.startup(() => {
//   // Server
//   const server = http.createServer();
//   const io = socket_io(server);
//
//   console.log("aaa");
//
//   let counter = 0;
//
//   // New client
//   io.on('connection', function(socket) {
//     console.log('new socket client');
//   });
//
//   // Start server
//   try {
//     server.listen(PORT);
//   } catch (e) {
//     console.error(e);
//   }
// });