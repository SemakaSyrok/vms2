const sequelize = require('sequelize');
const Op = sequelize.Op;
const Message = require('../models/message');
const User = require('../models/user');

module.exports = (io) => {

    io.on('connection', (socket) => {
        console.log("user connected");

        socket.on('createRoom', (room) => {
            socket.join(room);
            socket.room = room;
            console.log(`user ${socket.handshake.query.user.name} join ${room} room`);
        });


        socket.on('leaveRoom', (room) => {
            socket.leave(room);
            socket.room = null;
            console.log(`user ${socket.handshake.query.user.name} leave ${room} room`);
        });

        socket.on('message', msg => {
            console.log(msg + " message!!!");
            io.to(socket.room).emit('message', msg);
            console.log()
        });

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });



};