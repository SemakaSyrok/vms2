//Работы

const sequelize = require('sequelize');
const Project = require('../models/project');
const User = require('../models/user');
const formidable = require('formidable');
const fs = require('fs')

const multer = require('multer');

var storage = multer.diskStorage({

    destination: function (req, file, callback) {
        callback(null, './steps');
    },

    filename: function (req, file, callback) {
        // custom function to change filename
        var fileExtension = file.originalname.split('.');
        callback(null, `step${file.fieldname}-${Date.now()}.${fileExtension[fileExtension.length - 1]}`);
    }
});

var upload = multer({ storage: storage }).single('img');

module.exports = {
    getProjects(req, res) {
        Project.findAll({
            attributes: ["id", 'name'],
        }).then(works => {
            res.status(200).send(works);
        }).catch(err => {
            console.log(err);
            res.status(400).send(err);
        });
    },

    getProject(req, res) {
        Project.findOne({
            attributes: ["id", 'name', "steps","percents", "images"],
            where: { id: req.params.id }
        }).then(works => {
            res.status(200).send(works);
        }).catch(err => {
            res.status(400).send(err);
        });
    },

    getUserProject(req, res) {
        User.findOne({
            where: {
                token: req.headers.authorization
            }
        }).then((user) => {
            Project.findOne({
                attributes: ["id", 'name', "steps", "percents", "images"],
                where: { user_id: user.id }
            }).then(project => {
                res.status(200).send(project);
            }).catch(err => {
                res.status(400).send(err);
            });
        }).catch((err) => {
            res.sendStatus(401)
        })
        
    },

    newProject(req, res) {
        Project.create({
            name: req.body.name,
            user_id: req.body.user_id,
            percents: 0,
            steps: {
                steps: []
            },
            images: []
        }).then(project =>
            res.status(200).send(project)
        ).catch(err =>{
            res.status(400).send(err)
            console.log(err)
        });
    },


    UploadProjectImage(req, res) {
        let body = req.body;
        let file = req.files.img,
            filename = Date.now() + req.files.img.name;
        file.mv('./steps/' + filename, (err) => {
            if (!err) {
                Project.findOne(
                    { 'where': { 'id': req.params.id } }
                ).then(project => {
                    project.images.push({
                        path: filename,
                        desc: body.image_desc
                    })
                    let data = project.images;
                    project.update({
                        images: data
                    }).then(() => {
                        res.sendStatus(200);
                    }).catch((err) => {
                        res.sendStatus(400);
                    })
                }).catch(err => res.sendStatus(400))
            } else
                res.sendStatus(400);
        })
    },

    DeleteProjectImage(req, res) {
        Project.findOne(
            { 'where': { 'id': req.params.id } }
        ).then(project => {
            project.images = project.images.filter(img => img.path != req.params.img);
            project.save();
            try {
                fs.unlinkSync('./steps/' + req.params.img);
                res.sendStatus(200);
            } catch (err) {
                res.sendStatus(400);
            }
        }).catch(err => sendStatus(400))
    },

    deleteProject(req, res) {
        let error = false;
        Project.findOne({
            where: { id: req.params.id }
        }).then(project => {
            if (project.images) {
                for (let i = 0; i < project.images.length; i++) {
                    try {
                        fs.unlinkSync('./steps/' + project.images[i].path);
                    } catch (err) {
                        error = true; break;
                    }
                }
            }
            if (!error) {
                project.destroy();
                res.sendStatus(200);
            } else {
                project.destroy();
                res.sendStatus(200);
            }
        }).catch(err => res.sendStatus(401));
    },

    UpdateProject(req, res) {
        Project.update({
            name: req.body.name,
            user_id: req.body.user_id,
            percents: req.body.percents,
            steps: req.body.steps,
        }, {
                where: { id: req.params.id },
            }).then((isUpdated) => {
                isUpdated ? res.sendStatus(200) : res.sendStatus(400)
            }).catch((err) => res.sendStatus(400))
    },

    options(req, res) {
        console.log('options');
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
        res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET, PATCH');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.sendStatus(200)
    }
}
