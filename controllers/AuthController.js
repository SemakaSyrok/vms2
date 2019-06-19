const User = require('../models/user')


module.exports = {
    login(req, res) {
        User.findOne({
            where: {
                login: req.body.login,
                pass: req.body.password
            }
        })
            .then(user => {
                user
                    .update({
                        token: 'Bearer'+Math.floor((Math.random()*1000) + Date.now())
                    })
                    .then(upt_user =>
                        res
                            .status(200)
                            .send(JSON.stringify({
                                token: upt_user.token,
                                login: upt_user.login,
                                id: upt_user.id
                            }))
                    )
                    .catch(err => res.status(402).send(err));

            })
            .catch((err) => res.status(401).send(err))

    }

};