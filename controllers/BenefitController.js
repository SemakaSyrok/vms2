
const Benefit = require('../models/benefit');

module.exports = {
    getBenefit(req, res) {
        Benefit.findAll({
            attributes: ["id", 'question', "unswer",]
        }).then(coasts =>
            res.status(200).send(coasts)
        ).catch(err =>
            res.status(400).send(err)
        );
    },

    newBenefit(req, res) {
        Benefit.create({
            question: req.body.question,
            unswer: req.body.unswer,
        }).then(coast =>
            res.status(200).send(coast)
        ).catch(err =>
            res.status(400).send(err)
        );
    },

    deleteBenefit(req, res) {
        Benefit.destroy({
            where: { id: req.params.id }
        }).then(isDeleted => {
            isDeleted ? res.sendStatus(200) : res.sendStatus(400);
        }).catch(err => res.sendStatus(401));
    },

    updateBenefit(req, res) {
        Benefit.update({
            question: req.body.question,
            unswer: req.body.unswer,
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