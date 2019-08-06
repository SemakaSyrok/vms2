const db = require("./db");
const Sequelize = require("sequelize");

const Coasts = db.define("coasts", {
    name: { type: Sequelize.STRING, unique: true, allowNull: false },
    coast: { type: Sequelize.INTEGER, unique: false, allowNull: false, max: 22 }
});

module.exports = Coasts;
