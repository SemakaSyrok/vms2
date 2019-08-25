const Camera = require('../models/camera');
const User = require('../models/user');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});

proxy.on('error', function (err, req, res) {
    console.log('proxy error');
    console.log(err); console.log();
});

module.exports = {
    ProxyUser(req, res) {
        Camera.findOne({
            where: {
                id: req.params.id
            }
        }).then((camera) => {
            User.findOne({
                where: {
                    token: req.params.token
                }
            }).then((user) => {
                if(user.id === camera.owner_id) {
                    req.url = camera.connection_string;
                    console.log('asdasdasd');
                    console.log(req.url);
                    console.log(req.url.match(/[https]+:\/\/[\d.:a-zA-Z\-1-9]+/gi)[0]);

                    proxy.web(req, res, {
                        target: req.url.match(/[https]+:\/\/[\d.:a-zA-Z\-1-9]+/gi)[0]
                    });
                }
            }).catch((err) => {
                console.log(err);
                res.sendStatus(401)
            })
        }).catch((err) => {
            console.log(err);
            res.sendStatus(404)
        })
    },

    getCameras(req, res) {
        Camera.findAll({
            attributes: ["connection_string", 'name', "owner_id", 'id']
        }).then(cameras =>
            res.status(200).send(cameras)
        ).catch(err =>
            res.status(400).send(err)
        );
    },

    userCameras(req, res) {
        User.findOne({
            where: {token: req.headers.authorization}
        }).then(user => {
            Camera.findAll({
                attributes: [ 'name', 'id'],
                where: { owner_id : user.id}
            }).then(cameras => {
                res.status(200).send(cameras)
            }).catch(err => {
                res.sendStatus(404)
            })
        }).catch(err => {
            res.sendStatus(403)
        })
    },

    newCamera(req, res) {
        console.log('1111')
        Camera.create({
            name: req.body.name,
            connection_string: req.body.connection_string,
            owner_id: req.body.owner_id
        }).then(camera =>
            res.status(200).send(camera)
        ).catch(err =>
            res.status(400).send(err)
        );
    },

    deleteCamera(req, res) {
        Camera.destroy({
            where: { id: req.body.id }
        }).then(isDeleted => {
            isDeleted ? res.sendStatus(200) : res.sendStatus(400);
        }).catch(err => res.sendStatus(401));
    },

    updateCamera(req, res) {
        Camera.update({
            name: req.body.name,
            connection_string: req.body.connection_string,
            owner_id: req.body.owner_id
            }, {
            where: {id: req.body.id},
        }).then((isUpdated) => {
            console.log('isUpdated!')
            console.log(isUpdated)
            isUpdated ? res.sendStatus(200) : res.sendStatus(400)
        }).catch((err) => res.sendStatus(401))
    },

    options(req, res) {
        console.log('options');
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
        res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET, PATCH');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.sendStatus(200)
    }
};