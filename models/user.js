const db = require('./db')
const Sequelize = require('sequelize');

const User = db.define("users", {
  login:    { type: Sequelize.STRING , unique: true , allowNull: false },
  name:     { type: Sequelize.STRING , unique: true , allowNull: false },
  pass:     { type: Sequelize.STRING , unique: false, allowNull: false },
  token:    { type: Sequelize.STRING , unique: true , allowNull: true },
  is_admin: { type: Sequelize.INTEGER, unique: false, default: 0 }
});



module.exports = User;