const { Sequelize } = require('sequelize');
require('dotenv').config();

const env=process.env;

const DB= new Sequelize(`mysql://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}/${env.DB_NAME}`,{
	native: false, //useUTC:false, timezone: "-03:00"
})





module.exports=DB;