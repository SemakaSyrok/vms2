
module.exports = (User, Camera) => {
    User.create({
        id: 1,
        login:'zxczxc',
        pass: 'zxczxc',
        name: 'zxczxc',
        is_admin: 1,
        token: '1'
    });

    User.create({
        id: 2,
        login: 'asdfgh',
        pass: 'asdfgh',
        name: 'User',
        is_admin: 0,
        token: '2'
    })

    Camera.create({
        name: 'Camera1',
        owner_id: 2,
        connection_string: 'http://217.197.157.7:7070/axis-cgi/mjpg/video.cgi?camera=1'
    })

    Camera.create({
        name: 'Camera2',
        owner_id: 2,
        connection_string: 'http://meteobunyol.axiscam.net:9000/mjpg/video.mjpg'
    })

}
