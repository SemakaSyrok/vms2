const db = require('./db')
const Sequelize = require('sequelize');

const Work = db.define("works", {
    name: { type: Sequelize.STRING, unique: true, allowNull: false },
    desc: { type: Sequelize.TEXT, unique: false, allowNull: false },
    shir: { type: Sequelize.DOUBLE, unique: false, allowNull: false },
    dolg: { type: Sequelize.DOUBLE, unique: false, allowNull: false },
    images: { type: Sequelize.ARRAY(Sequelize.STRING), unique: false, default: 0 }
});



module.exports = Work;