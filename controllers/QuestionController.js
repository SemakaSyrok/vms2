
const Question = require('../models/question');

module.exports = {
    getQuestion(req, res) {
        Question.findAll({
            attributes: ["id", 'question', "unswer",]
        }).then(question =>
            res.status(200).send(question)
        ).catch(err =>
            res.status(400).send(err)
        );
    },

    newQuestion(req, res) {
        Question.create({
            question: req.body.question,
            unswer: req.body.unswer,
        }).then(question =>
            res.status(200).send(question)
        ).catch(err =>
            res.status(400).send(err)
        );
    },

    deleteQuestion(req, res) {
        Question.destroy({
            where: { id: req.params.id }
        }).then(isDeleted => {
            isDeleted ? res.sendStatus(200) : res.sendStatus(400);
        }).catch(err => res.sendStatus(401));
    },

    updateQuestion(req, res) {
        Question.update({
            unswer: req.body.unswer,
            question: req.body.question,
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