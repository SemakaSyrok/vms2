//Работы

const sequelize = require('sequelize');
const Work = require('../models/work');
const formidable = require('formidable');
const fs = require('fs')

const multer = require('multer');

var storage = multer.diskStorage({

    destination: function (req, file, callback) {
        callback(null, './uploads');
    },

    filename: function (req, file, callback) {
      // custom function to change filename
      var fileExtension = file.originalname.split('.');
      callback(null, `${file.fieldname}-${Date.now()}.${fileExtension[fileExtension.length - 1]}`);
    }
});

var upload = multer({ storage: storage }).single('img');

module.exports = {
    getWorks(req, res) {
        Work.findAll({
            attributes: ["id", 'name', "desc", "shir", "dolg", "images"],
        }).then(works => {
            console.log(works);
            res.status(200).send(works);
        }
        ).catch(err => {
            console.log(err);
            res.status(400).send(err);
        }
        );
    },

    getWork(req, res) {
        Work.findAll({
            attributes: ["id", 'name', "desc", "shir", "dolg", "images"],
            where: {id: req.params.id}
        }).then(works => {
            console.log(works);
            res.status(200).send(works);
        }).catch(err => {
            console.log(err);
            res.status(400).send(err);
        });
    },

    newWork(req, res) {
        Work.create({
            name: req.body.name,
            desc: req.body.desc,
            shir: req.body.shir,
            dolg: req.body.dolg,
            images: null
        }).then(work =>
            res.status(200).send(work)
        ).catch(err =>
            res.status(400).send(err)
        );
    },
    
    deleteWork(req, res) {
        let error = false;
        Work.findOne({
            where: { id: req.params.id }
        }).then(work => {
            if (work.images) {
                for (let i = 0; i < work.images.length; i++) {
                    try {
                        fs.unlinkSync('./uploads/' + work.images[i]);
                    } catch (err) {
                        error = true; break;
                    }
                }
            }
            if(!error) {
                work.destroy();
                res.sendStatus(200);
            } else {
                work.destroy();
                res.sendStatus(200);
            }
        }).catch(err => res.sendStatus(401));
    },


 //   UploadWorkImage(req, res) {
//        upload(req, res, function (err) {
//            if (!err) {
//	console.log(req.file)
         //       Work.update(
        //            { 'images': sequelize.fn('array_append', sequelize.col('images'), req.file) },
       //             { 'where': { 'id': req.params.id } }
      //          ).then(work => {
     //               res.sendStatus(200);
    //            }).catch(err => sendStatus(400))
   //         } else
  //              res.sendStatus(400);
 //       });
//    },
    //

     UploadWorkImage(req, res) {
         console.log(req);
             let file = req.files.img,
                 filename = Date.now() + req.files.img.name;
             file.mv('./uploads/'+filename, (err) => {
                 if(!err){
                   Work.update(
                      { 'images': sequelize.fn('array_append', sequelize.col('images'), filename) },
                         { 'where': { 'id': req.params.id } }
                     ).then(work => {
                         res.sendStatus(200);
                     }).catch(err => sendStatus(400))
                } else 
                     res.sendStatus(400);
            })
     },

    DeleteWorkImage(req, res) {
            Work.findOne(
                { 'where': { 'id': req.params.id } }
            ).then(work => {
                work.images = work.images.filter(img => img != req.params.img);
                work.save();
                try {
                    fs.unlinkSync('./uploads/' + req.params.img);
                    res.sendStatus(200);
                } catch (err) {
                    res.sendStatus(400);
                }
            }).catch(err => sendStatus(400))
    },
    //
    UpdateWork(req, res) {
        Work.update({
            name: req.body.name,
            desc: req.body.desc,
            shir: req.body.shir,
            dolg: req.body.dolg,
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
}
