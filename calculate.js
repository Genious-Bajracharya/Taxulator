// var mysql = require('mysql');

var x;
function myFunction() {
  x = document.getElementById("marittal").value;
  console.log(x);
}
var date;

function Taxcalculate() {
  if (x == "Individual") {
    var income = document.getElementById("income").value;
    date = document.getElementById("date");
    console.log(income);
    console.log(date);
    // console.log(x);
    if (income <= 400000) {
      var tax = income / 100;
      var salary_after = income - tax;
      document.getElementById("taxA").value = tax;
      document.getElementById("sat").value = salary_after;
      document.getElementById("rate").value = "1%";
      console.log(tax);
      console.log(salary_after);
    } else if (income > 400000 && income <= 500000) {
      var tax = (income / 100) * 10;
      var salary_after = income - tax;
      document.getElementById("taxA").value = tax;
      document.getElementById("sat").value = salary_after;
      document.getElementById("rate").value = "10%";
      console.log(tax);
      console.log(salary_after);
    } else if (income > 500000 && income <= 700000) {
      var tax = (income / 100) * 20;
      var salary_after = income - tax;
      document.getElementById("taxA").value = tax;
      document.getElementById("sat").value = salary_after;
      document.getElementById("rate").value = "20%";
      console.log(tax);
      console.log(salary_after);
    } else if (income > 700000 && income <= 2000000) {
      var tax = (income / 100) * 30;
      var salary_after = income - tax;
      document.getElementById("taxA").value = tax;
      document.getElementById("sat").value = salary_after;
      document.getElementById("rate").value = "30%";
      console.log(tax);
      console.log(salary_after);
    } else if (income > 2000000) {
      var tax = (income / 100) * 36;
      var salary_after = income - tax;
      document.getElementById("taxA").value = tax;
      document.getElementById("sat").value = salary_after;
      document.getElementById("rate").value = "36%";
      console.log(tax);
      console.log(salary_after);
    }
  } else {
    var income = document.getElementById("income").value;
    console.log(income);
    // console.log(x);
    if (income <= 450000) {
      var tax = income / 100;
      var salary_after = income - tax;
      document.getElementById("taxA").value = tax;
      document.getElementById("sat").value = salary_after;
      document.getElementById("rate").value = "1%";
      console.log(tax);
      console.log(salary_after);
    } else if (income > 450000 && income <= 550000) {
      var tax = (income / 100) * 10;
      var salary_after = income - tax;
      document.getElementById("taxA").value = tax;
      document.getElementById("sat").value = salary_after;
      document.getElementById("rate").value = "10%";
      console.log(tax);
      console.log(salary_after);
    } else if (income > 550000 && income <= 750000) {
      var tax = (income / 100) * 20;
      var salary_after = income - tax;
      document.getElementById("taxA").value = tax;
      document.getElementById("sat").value = salary_after;
      document.getElementById("rate").value = "20%";
      console.log(tax);
      console.log(salary_after);
    } else if (income > 750000 && income <= 2000000) {
      var tax = (income / 100) * 30;
      var salary_after = income - tax;
      document.getElementById("taxA").value = tax;
      document.getElementById("sat").value = salary_after;
      document.getElementById("rate").value = "30%";
      console.log(tax);
      console.log(salary_after);
    } else if (income > 2000000) {
      var tax = (income / 100) * 36;
      var salary_after = income - tax;
      document.getElementById("taxA").value = tax;
      document.getElementById("sat").value = salary_after;
      document.getElementById("rate").value = "36%";
      console.log(tax);
      console.log(salary_after);
    }
  }
}

function AllReset() {
  document.getElementById("Form1").reset();
}

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "tax",
// });

// function Conn(){
//     con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO user (phone_number,first_name,last_name, password, email) VALUES ('12344567898', 'Veldora','Tempest','stormdragon','Veldora@dora.com')";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//     });
//     });
// }
