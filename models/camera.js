const db = require("./db");
const Sequelize = require("sequelize");

const Camera = db.define("cameras", {
  connection_string: { type: Sequelize.STRING, unique: false, allowNull: false },
  name: { type: Sequelize.STRING, unique: true, allowNull: false },
  owner_id: { type: Sequelize.INTEGER, unique: false, allowNull: false }
});

module.exports = Camera;
