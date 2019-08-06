
const Coast = require('../models/coasts');

module.exports = {
    getCoasts(req, res) {
        Coast.findAll({
            attributes: ["id", 'name', "coast",]
        }).then(coasts =>
            res.status(200).send(coasts)
        ).catch(err =>
            res.status(400).send(err)
        );
    },

    newCoasts(req, res) {
        Coast.create({
            coast: req.body.coast,
            name: req.body.name,
        }).then(coast =>
            res.status(200).send(coast)
        ).catch(err =>
            res.status(400).send(err)
        );
    },

    deleteCoasts(req, res) {
        Coast.destroy({
            where: { id: req.params.id }
        }).then(isDeleted => {
            isDeleted ? res.sendStatus(200) : res.sendStatus(400);
        }).catch(err => res.sendStatus(401));
    },

    updateCoasts(req, res) {
        Coast.update({
            name: req.body.name,
            coast: req.body.coast,
        }, {
            where: {id: req.params.id},
        }).then((isUpdated) => {
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