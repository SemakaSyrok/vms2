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
const Project = require("./models/project");

const app = require('express')();
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const http = require('http').Server(app);
const io = require('socket.io')(http);
require('./io')(io);

let force = true;

db.sync({force: force}).then(() => {

    if(force) require('./migrations')(User, Camera)

});
//sequelize.sync()

require('./usages')(app, bodyParser);
require('./routes')(app);

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

