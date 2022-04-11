// function for login button.
function check() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "user" && password == "user") {
    // open login page
    window.location = "Home.html";
    return false;
  } else {
    alert("Invalid useename or password");
  }
}

function Reg() {
  window.location = "register.html";
}
