let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'tax'
});


function Register(){
    var firstname = document.getElementById("FN").value;
    var lastname = document.getElementById("LN").value;
    var email = document.getElementById("EA").value;
    var phone = document.getElementById("PN").value;
    var password1 = document.getElementById("pass1").value;
    var password = document.getElementById("pass2").value;

    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(phone);
    console.log(password);

    var values=[firstname,lastname,email,phone,password];
    
    if(password==password1){
        connection.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            var sql = `INSERT INTO contacts (f_name, l_name, email, message, created_at) VALUES ("${f_name}", "${l_name}", "${email}", "${message}", NOW())`;
            db.query(sql, function(err, result) {
              if (err) throw err;
              console.log('record inserted');
              req.flash('success', 'Data added successfully!');
              res.redirect('/');
            });
          });
          
          connection.connect(function(err) {
            if (err) throw err;
            console.log('Database is connected successfully !');
          });
    }else{
        alert("Password don't match")
    }
    
    }