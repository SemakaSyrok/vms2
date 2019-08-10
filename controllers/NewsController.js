
const News = require('../models/news');

module.exports = {
    getNews(req, res) {
        News.findAll({
            attributes: ["id", 'news', "description",]
        }).then(News =>
            res.status(200).send(News)
        ).catch(err =>
            res.status(400).send(err)
        );
    },

    newNews(req, res) {
        News.create({
            news: req.body.news,
            description: req.body.description,
        }).then(News =>
            res.status(200).send(News)
        ).catch(err =>
            res.status(400).send(err)
        );
    },

    deleteNews(req, res) {
        News.destroy({
            where: { id: req.params.id }
        }).then(isDeleted => {
            isDeleted ? res.sendStatus(200) : res.sendStatus(400);
        }).catch(err => res.sendStatus(401));
    },

    updateNews(req, res) {
        News.update({
            description: req.body.description,
            news: req.body.news,
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