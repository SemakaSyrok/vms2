require('dotenv').config();
const db = require('./models/db')
const User = require('./models/user')
const Camera = require("./models/camera");
const app = require('express')();
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const http = require('http').Server(app);
const io = require('socket.io')(http);


db.sync({force: false}).then(() => {
    // User.create({
    //     login: "abminadmin",
    //     name: "Алексей",
    //     pass: "12pass32word99",
    //     token: "111111111",
    //     is_admin: 1
    // });
    // User.create({
    //     login: "testUser",
    //     name: "Алексейa",
    //     pass: "testpassword",
    //     token: "1111111112",
    //     is_admin: 0
    // });
    // Camera.create({
    //     name: 'Камера',
    //     connection_string: 'http://217.197.157.7:7070/axis-cgi/mjpg/video.cgi?camera=1',
    //     owner_id: 2
    // });
    // Camera.create({
    //     name: 'Камера2',
    //     connection_string: 'http://meteobunyol.axiscam.net:9000/mjpg/video.mjpg',
    //     owner_id: 2
    // });
});
// sequelize.sync()


require('./usages')(app, bodyParser)
require('./routes')(app)


io.on('connection', function (socket) {
    console.log('a user connected');
});


db
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        app.listen(process.env.PORT, function () {
            console.log('listening on ' + process.env.PORT);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


