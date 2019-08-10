const db = require("./db");
const Sequelize = require("sequelize");

const News = db.define("news", {
    news: { type: Sequelize.STRING, unique: true, allowNull: false },
    description: { type: Sequelize.STRING, unique: true, allowNull: false },
});

module.exports = News;
