require('dotenv').config();
const db = require('./models/db');

const User = require('./models/user');
const Camera = require("./models/camera");
const Coast = require("./models/coasts");
const Benefit = require("./models/question");
const Question = require("./models/benefit");
const Message = require("./models/message");
const Work = require("./models/work");
const News = require("./models/news");
const Bonuses = require("./models/bonus");

const app = require('express')();
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const http = require('http').Server(app);
const io = require('socket.io')(http);



db.sync({force: false}).then(() => {

});
// sequelize.sync()

require('./usages')(app, bodyParser);
require('./routes')(app);

let getUser = async (token) => {

    return await User.findOne({
        attributes: ["id", "login", "name", "pass", "is_admin"],
        where: {
            token: token
        }
    }).then(user => user)
    .catch(err => null)
};

io.use( async (socket, next) => {
    let token = socket.handshake.query.token;
    let user = await getUser(token);
    if (token) {
        socket.user = user;
        return next();
    }
    return next(new Error('authentication error'));
});

let createMessage = async (socket, msg) => {
    return await Message.create({
        text:msg,
        user_id: socket.user.id ,
        room: socket.room
    }).then(message => message).catch(err => err)
};

io.on('connection', (socket) => {
    console.log("user connected");

    socket.on('createRoom', (room) => {
       socket.join(room);
       socket.room = room;
       // console.log(`user ${socket.user.name} join ${room} room`);
        //TODO: Зарегать компонент соообщение
    });

    socket.on('leaveRoom', (room) => {
        socket.leave(room);
        socket.room = null;
    });

    socket.on('message', async msg => {
        console.log(msg + " message!!!");
        try {
            const message = await createMessage(socket, msg);
            io.to(socket.room).emit('message', message);
        } catch(err) {
            console.log(err);
        }
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});


db
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        http.listen(process.env.PORT, function () {
            console.log('listening on ' + process.env.PORT);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

