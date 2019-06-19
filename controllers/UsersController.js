const User = require('../models/user');
const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = {
    createUser(req, res) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
        res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Credentials', true);
        User.create({
            login: req.body.login,
            pass: req.body.password,
            name: req.body.name,
            token: Math.floor(Math.random() * 100),
            is_admin: req.body.is_admin ? 1 : 0
        }).then((user) =>
            res.status(200).send(user)
        ).catch((err) => res.status(400).send(err))

    },

    deleteUser(req, res) {
        User.destroy({
            where: {id: req.body.id}
        }).then((isDeleted) => {
            isDeleted ? res.sendStatus(200) : res.sendStatus(400)
        }).catch((err) => res.sendStatus(401))
    },

    updateUser(req, res) {
        User.update({
            login: req.body.login,
            pass: req.body.password,
            name: req.body.name,
            is_admin: req.body.is_admin ? 1 : 0,
            }, {
            where: {id: req.body.id},
        }).then((isDeleted) => {
            isDeleted ? res.sendStatus(200) : res.sendStatus(400)
        }).catch((err) => res.sendStatus(401))
    },

    getUsers(req, res) {
        User.findAll({
            attributes: ["id", "login", "name", "pass", "is_admin"],
            where: {
                id: {
                    [Op.ne] : 1
                }
            }
        }).then(user =>
            res.status(200).send(user)
        ).catch(err => res.status(400).send(err));
    },

    options(req, res) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
        res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET, PATCH');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.sendStatus(200)
    }
};