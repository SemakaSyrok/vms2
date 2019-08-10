
const Bonuses = require('../models/bonus');

module.exports = {
    getBonuses(req, res) {
        Bonuses.findAll({
            attributes: ["id", 'bonuses', "unswer", "link"]
        }).then(Bonuses =>
            res.status(200).send(Bonuses)
        ).catch(err =>
            res.status(400).send(err)
        );
    },

    newBonuses(req, res) {
        Bonuses.create({
            bonuses: req.body.bonuses,
            unswer: req.body.unswer,
            link: req.body.link,
        }).then(Bonuses =>
            res.status(200).send(Bonuses)
        ).catch(err =>
            res.status(400).send(err)
        );
    },

    deleteBonuses(req, res) {
        Bonuses.destroy({
            where: { id: req.params.id }
        }).then(isDeleted => {
            isDeleted ? res.sendStatus(200) : res.sendStatus(400);
        }).catch(err => res.sendStatus(401));
    },

    updateBonuses(req, res) {
        Bonuses.update({
            unswer: req.body.unswer,
            bonuses: req.body.bonuses,
            link: req.body.link,
        }, {
                where: { id: req.params.id },
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