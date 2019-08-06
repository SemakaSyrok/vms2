const db = require("./db");
const Sequelize = require("sequelize");

const Message= db.define("Message", {
    text: { type: Sequelize.STRING, unique: false, allowNull: false },
    user_id: { type: Sequelize.INTEGER, unique: false, allowNull: false },
    room: { type: Sequelize.INTEGER, unique: false, allowNull: false },
});

module.exports = Message;
