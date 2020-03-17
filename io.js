const User = require('./models/User');
const Message = require('./models/Message');

module.exports = function(io) {


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


}