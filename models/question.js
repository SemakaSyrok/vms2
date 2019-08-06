const db = require("./db");
const Sequelize = require("sequelize");

const Question = db.define("question", {
    question: { type: Sequelize.STRING, unique: true, allowNull: false },
    unswer: { type: Sequelize.STRING, unique: true, allowNull: false },
});

module.exports = Question;
