
var mysql = require("mysql");

//if jaws db exist, connect to that, else set up local connection
if (process.env.JAWSDB_URL) {
  connection = sql.createConnection(process.env.JAWSDB_URL)
}
else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db"
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;