const db = require("./db");
const Sequelize = require("sequelize");

const Bonuses = db.define("bonuses", {
    bonuses: { type: Sequelize.STRING, unique: true, allowNull: false },
    unswer: { type: Sequelize.STRING, unique: true, allowNull: false },
    link: { type: Sequelize.STRING, unique: false, allowNull: false }
});

module.exports = Bonuses;