exports.initialize = function () {
    var Sequelize = require('sequelize');
    var mysql = require("mysql");

    const dbHost     = process.env.RDS_HOSTNAME;
    const dbUser     = process.env.RDS_USERNAME;
    const dbPassword = process.env.RDS_PASSWORD;
    const dbPort     = process.env.RDS_PORT;

    const dbName = 'notes';

    var con = mysql.createConnection({
      host: dbHost,
      user: dbUser,
      password: dbPassword
    });

    con.connect(function(err){
      if(err){
        console.log('Error connecting to Db');
        return;
      }

    });

    // Create the db, because sequelize can't.
    con.query('CREATE DATABASE ' + dbName, function(err,rows){

      console.log('Data received from Db:\n');
      console.log(rows);
    });

    con.end();

    var sequelize = new Sequelize(dbName, dbUser, dbPassword, {
      host: dbHost,
      dialect: 'mysql',

      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    });

    var Note = require('./note.js').initialize(sequelize);

    return {
        Note: Note
    };
}