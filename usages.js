const User = require('./models/user');
const express = require('express');
const path = require('path');
const upload = require('express-fileupload');

module.exports = (app, bodyParser) => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(upload());

    app.use('/static1', express.static(__dirname + '/client/dist/static1'));
    app.use('/static', express.static(__dirname + '/user/dist/static'));
    app.use('/uploads', express.static(__dirname + '/uploads'));
    app.use('/sw.js', express.static(__dirname + '/sw.js'));

    app.use('/', function (req, res, next) {

        if(req.headers.method === 'options') {
            res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
            res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
            res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET');
            res.setHeader('Access-Control-Allow-Credentials', true);
            res.sendStatus(200);
        } else {
            if(req.headers.origin) res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
            res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
            res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET');
            res.setHeader('Access-Control-Allow-Credentials', true);
            next();
        }
    });

    app.use('/user', function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
        res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });

    app.use('/camera', function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
        res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });

    app.use('/coasts', function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
        res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });

    app.use("/user", function (req, res, next) {
        if(req.method === "OPTIONS") {
            next();
            return;
        }
        User.findOne({
            where: {
                token: req.headers.authorization
            }
        })
            .then(user => (user.is_admin === 1) ? next() : res.sendStatus(401))
            .catch(err => res.sendStatus(401))
    });

    app.use("/users", function (req, res, next) {
        if(req.method === "OPTIONS") {
            next();
            return;
        }
        User.findOne({
            where: {
                token: req.headers.authorization
            }
        })
            .then(user => (user.is_admin === 1) ? next() : res.sendStatus(401))
            .catch(err => res.sendStatus(401))
    });

    app.use("/camera", function (req, res, next) {
        if(req.method === "OPTIONS") {
            next();
            return;
        }
        User.findOne({
            where: {
                token: req.headers.authorization
            }
        })
            .then(user => (user.is_admin === 1 ? next() : res.sendStatus(401)))
            .catch(err => res.sendStatus(401))
    });

    app.use("/cameras", function (req, res, next) {
        if(req.method === "OPTIONS") {
            next();
            return;
        }
        User.findOne({
            where: {
                token: req.headers.authorization
            }
        })
            .then(user => (user.is_admin === 1 ? next() : res.sendStatus(401)))
            .catch(err => res.sendStatus(401))
    });

    app.use("/coasts*", function (req, res, next) {
        if(req.method === "OPTIONS") {
            next();
            return;
        }
        User.findOne({
            where: {
                token: req.headers.authorization
            }
        })
            .then(user => (user.is_admin === 1 ? next() : res.sendStatus(401)))
            .catch(err => res.sendStatus(401))
    });

    app.use("/question*", function (req, res, next) {
        if (req.method === "OPTIONS") {
            next();
            return;
        }
        User.findOne({
            where: {
                token: req.headers.authorization
            }
        })
            .then(user => (user.is_admin === 1 ? next() : res.sendStatus(401)))
            .catch(err => res.sendStatus(401))
    });

    app.use("/benefit*", function (req, res, next) {
        if (req.method === "OPTIONS") {
            next();
            return;
        }
        User.findOne({
            where: {
                token: req.headers.authorization
            }
        })
            .then(user => (user.is_admin === 1 ? next() : res.sendStatus(401)))
            .catch(err => res.sendStatus(401))
    });

    app.use("/bonuses*", function (req, res, next) {
        if (req.method === "OPTIONS") {
            next();
            return;
        }
        User.findOne({
            where: {
                token: req.headers.authorization
            }
        })
            .then(user => (user.is_admin === 1 ? next() : res.sendStatus(401)))
            .catch(err => res.sendStatus(401))
    });

    app.use("/news*", function (req, res, next) {
        if (req.method === "OPTIONS") {
            next();
            return;
        }
        User.findOne({
            where: {
                token: req.headers.authorization
            }
        })
            .then(user => (user.is_admin === 1 ? next() : res.sendStatus(401)))
            .catch(err => res.sendStatus(401))
    });

    app.use("/work*", function (req, res, next) {
        if (req.method === "OPTIONS") {
            next();
            return;
        }
        User.findOne({
            where: {
                token: req.headers.authorization
            }
        })
            .then(user => {
                if (user.is_admin === 1 || req.method === 'GET') 
                    next() 
                else
                     res.sendStatus(401)
            })
            .catch(err => res.sendStatus(401))
    });

};