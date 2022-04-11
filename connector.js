var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "tax"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO user (phone_number,first_name,last_name, password, email) VALUES ('12344567898', 'Veldora','Tempest','stormdragon','Veldora@dora.com')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// }); 

module.exports = con;



// var express = require('express');
// var app = express();
// var ejs = require('ejs');
// var pg = require('pg');
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true })); 


//         var conString = process.env.DATABASE_URL || "postgres://postgres:Emdsystems@localhost:5432/student";
//         var client = new pg.Client(conString);
//         client.connect();

// app.get('/',function(req,res,next){
// res.sendfile('views/loginpanel.html');
// });

// app.post('/myaction', function(req, res) {

// console.log('req.body');
// console.log(req.body);
// res.write('You sent the name "' + req.body.name+'".\n');
// res.write('You sent the Email "' + req.body.email+'".\n');
// res.write('You sent the City "' + req.body.city+'".\n');
// res.write('You sent the Pincode "' + req.body.pincode+'".\n');
// res.end()

// client.query("Insert into user (name,email,city,pincode) VALUES ('"+req.body.name+"','"+req.body.email+"','"+req.body.city+"','"+req.body.pincode+"')",function(err, result)      
// {                                                      
//   if (err)
//      throw err;
// });
// });
// app.listen(3000);
// console.log('Example app listening at port:3000');

