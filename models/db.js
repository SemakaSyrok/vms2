const Sequelize = require('sequelize') ;

const db = new Sequelize(`postgres://${process.env.user}:${process.env.password}@${process.env.host}:${process.env.db_port}/${process.env.db_name}`)


module.exports = db;





      