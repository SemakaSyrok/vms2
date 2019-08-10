const Sequelize = require('sequelize') ;

// const db = new Sequelize(`postgres://${process.env.user}:${process.env.password}@${process.env.host}:${process.env.port}/${process.env.db_name}`)
const db = new Sequelize(`postgres://clpidzbhtrexnk:41224e7df24f28dc85128fa2a57036a8ec11989d00aa02f5e5aa68c903c659ef@ec2-54-246-84-100.eu-west-1.compute.amazonaws.com:5432/d476gh6nh9n4ns`)


module.exports = db;





      