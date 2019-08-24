const db = require("./db");
const Sequelize = require("sequelize");

const Project = db.define("projects", {
    name: { type: Sequelize.STRING, unique: true, allowNull: false },
    user_id: {type: Sequelize.INTEGER, unique: true, allowNull: false},
    percents: { type: Sequelize.INTEGER, unique: false, allowNull: true, default: 0 },
    steps: {type:Sequelize.JSONB, allowNull:true},
    images: { type: Sequelize.JSONB, allowNull: true }
});


module.exports = Project;