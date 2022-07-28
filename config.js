const mysql = require('mysql');
const dbConn = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     :  process.env.DB_NAME,
  password :  process.env.DB_PASS,
  database :  process.env.DB_NAME
});
dbConn.connect(function(err) {
  if (err) console.log(err.stack);
  console.log("Database Connected!");
});
module.exports = dbConn;