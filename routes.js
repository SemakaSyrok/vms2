
const AuthController =  require('./controllers/AuthController');
const CameraController =  require('./controllers/CameraController');
const UsersController =  require('./controllers/UsersController');
const CoastController =  require('./controllers/CoastController');
const QuestionController =  require('./controllers/QuestionController');
const BenefitController =  require('./controllers/BenefitController');
const MessagesController =  require('./controllers/MessagesControlle');
const WorkController = require('./controllers/WorkController');
const BonusesController = require('./controllers/BonusesController');
const NewsController = require('./controllers/NewsController');

const path = require('path');

module.exports = (app) => {

    app.options('/user', UsersController.options);
    app.options('/camera', CameraController.options);
    app.options('/coasts', CoastController.options);
    app.options('/questions', QuestionController.options);
    app.options('/works', WorkController.options);
    app.options('/news', NewsController.options);
    app.options('/bonuses', BonusesController.options);
    app.options('/benefit', BenefitController.options);
    app.options('/api/cameras', CameraController.options);
    app.options('/api/questions', QuestionController.options);
    app.options('/api/benefits', BenefitController.options);
    app.options('/api/coasts', CoastController.options);
    app.options('/api/works', WorkController.options);
    app.options('/api/news', NewsController.options);
    app.options('/api/bonuses', BonusesController.options);



    app.post('/login', AuthController.login);

    app.get('/', (req, res) => {
        res.setHeader('Upgrade-Insecure-Requests', 0;
        res.sendFile(__dirname + '/user/dist/index.html');
    });

    app.get('/admin', (req, res) => {
        res.setHeader('Upgrade-Insecure-Requests', 0;
        res.sendFile(__dirname + '/client/dist/index.html');
    });

    //api
    app.get('/api/cameras', CameraController.userCameras);
    app.get('/api/coasts', CoastController.getCoasts);
    app.get('/api/benefits', BenefitController.getBenefit);
    app.get('/api/questions', QuestionController.getQuestion);
    app.get('/api/works', WorkController.getWorks);
    app.get('/api/news', NewsController.getNews);
    app.get('/api/bonuses', BonusesController.getBonuses);


    //users
    app.post('/user', UsersController.createUser);
    app.delete('/user', UsersController.deleteUser );
    app.get('/users', UsersController.getUsers );
    app.put('/user', UsersController.updateUser );


    //cameras
    app.get("/cameras", CameraController.getCameras);
    app.post("/camera", CameraController.newCamera);
    app.delete("/camera", CameraController.deleteCamera);
    app.put("/camera", CameraController.updateCamera);


    //coasts
    app.get("/coasts", CoastController.getCoasts);
    app.post("/coasts", CoastController.newCoasts);
    app.delete("/coasts/:id", CoastController.deleteCoasts);
    app.put("/coasts/:id", CoastController.updateCoasts);


    //questions
    app.get("/questions", QuestionController.getQuestion);
    app.post("/questions", QuestionController.newQuestion);
    app.delete("/questions/:id", QuestionController.deleteQuestion);
    app.put("/questions/:id", QuestionController.updateQuestion);


    //benefits
    app.get("/benefit", BenefitController.getBenefit);
    app.post("/benefit", BenefitController.newBenefit);
    app.delete("/benefit/:id", BenefitController.deleteBenefit);
    app.put("/benefit/:id", BenefitController.updateBenefit);


    //messages
    app.get('/messages/:id/:offset', MessagesController.getMessages);


    //bonuses
    app.get("/bonuses", BonusesController.getBonuses);
    app.post("/bonuses", BonusesController.newBonuses);
    app.delete("/bonuses/:id", BonusesController.deleteBonuses);
    app.put("/bonuses/:id", BonusesController.updateBonuses);


    //news
    app.get("/news", NewsController.getNews);
    app.post("/news", NewsController.newNews);
    app.delete("/news/:id", NewsController.deleteNews);
    app.put("/news/:id", NewsController.updateNews);


    //work
    app.post('/work', WorkController.newWork);
    app.put('/work/:id', WorkController.UpdateWork);
    app.get('/works', WorkController.getWorks);
    app.post('/work/:id/image', WorkController.UploadWorkImage);
    app.get('/work/:id', WorkController.getWork);
    app.delete('/work/:id', WorkController.deleteWork);
    app.delete('/work/:id/delete-image/:img', WorkController.DeleteWorkImage);
};