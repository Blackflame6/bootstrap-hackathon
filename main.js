const button = getElementById('signing')
let username = document.getElementById('username').Value;
  let password = document.getElementById('password').value

function validate () {
  
button.addEventListener ('click', login)

}
function login() {

  if (username == 'franklyn' && password == 'user') {
    alert("login sucessful")
  } else {
    alert ("login failed")
  }
}
