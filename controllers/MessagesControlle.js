const sequelize = require('sequelize');
const Message = require('../models/message');

module.exports = {
    getMessages(req, res) {
        Message.findAll({
            attributes: ["id", 'room', "user_id", "createdAt", "text"],
            where: { room: req.params.id },
            offset: req.params.offset,
            limit: 20,
            order: [
                ['id', 'DESC'],
            ],
        }).then(messages =>
            {console.log(messages);
                res.status(200).send(messages);}
        ).catch(err =>
            {console.log(err);
                res.status(400).send(err);}
        );
    },

    // newBenefit(req, res) {
    //     Benefit.create({
    //         question: req.body.question,
    //         unswer: req.body.unswer,
    //     }).then(coast =>
    //         res.status(200).send(coast)
    //     ).catch(err =>
    //         res.status(400).send(err)
    //     );
    // },
    //
    // deleteBenefit(req, res) {
    //     Benefit.destroy({
    //         where: { id: req.params.id }
    //     }).then(isDeleted => {
    //         isDeleted ? res.sendStatus(200) : res.sendStatus(400);
    //     }).catch(err => res.sendStatus(401));
    // },
    //
    // updateBenefit(req, res) {
    //     Benefit.update({
    //         question: req.body.question,
    //         unswer: req.body.unswer,
    //     }, {
    //         where: {id: req.params.id},
    //     }).then((isUpdated) => {
    //         isUpdated ? res.sendStatus(200) : res.sendStatus(400)
    //     }).catch((err) => res.sendStatus(401))
    // },

    options(req, res) {
        console.log('options');
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
        res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET, PATCH');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.sendStatus(200)
    }
};