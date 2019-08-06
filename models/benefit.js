const db = require("./db");
const Sequelize = require("sequelize");

const Benefit = db.define("benefit", {
    question: { type: Sequelize.STRING, unique: true, allowNull: false },
    unswer: { type: Sequelize.STRING, unique: true, allowNull: false },
});

module.exports = Benefit;
