
const AuthController =  require('./controllers/AuthController');
const CameraController =  require('./controllers/CameraController');
const UsersController =  require('./controllers/UsersController');
const path = require('path');

module.exports = (app) => {

    app.options('/user', UsersController.options);
    app.options('/camera', CameraController.options);
    app.options('/api/cameras', CameraController.options);


    app.post('/login', AuthController.login);

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });

    app.get('/admin', (req, res) => {
        res.sendFile(__dirname + '/admin/index.html');
    });

    app.get('/api/cameras', CameraController.userCameras)

    app.post('/user', UsersController.createUser);

    app.delete('/user', UsersController.deleteUser );

    app.get('/users', UsersController.getUsers );

    app.put('/user', UsersController.updateUser );

    app.get("/cameras", CameraController.getCameras);

    app.post("/camera", CameraController.newCamera);

    app.delete("/camera", CameraController.deleteCamera);

    app.put("/camera", CameraController.updateCamera);
}