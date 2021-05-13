const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    database:'api_node'
  

});

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Mysql connected...');

  /**
 * post parckings
 * ajout de parckings
 */

 var sql = "INSERT INTO parckings (name, address, type, city, places_number, disponibilite) VALUES ('Les larris', '95000 Pontoise', 'Aeroport', 'Cergy', 250, 105)";
 connection.query(sql, function (err, _res) {
   if (err) throw err;
   console.log("1 parckings inserted");
 });

 /**
 * get parckings
 * recuperation de tout les parckings
 */
  connection.query("SELECT * FROM parckings", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  /**
   * update
   * modification de parckings
   */
   var sql = "UPDATE parckings SET address = '75000 Paris' WHERE address = '95000 Pontoise'";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " Parckings updated");
  });


  /**
   * delete
   * suppression de parckings
   */
   var sql = "DELETE FROM Parckings WHERE type = 'privé'";
   connection.query(sql, function (err, result) {
     if (err) throw err;
     console.log("Number of parckings deleted: " + result.affectedRows);
   });




    });



