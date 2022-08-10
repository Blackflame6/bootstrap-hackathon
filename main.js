const button = document.querySelector('button')
validate()
function validate () {
  let username = document.getElementById('username').nodeValue;
  let password = document.getElementById('password').value
button.addEventListener ('click', login)

}
function login() {

  if (username == 'franklyn' && password == 'user') {
    alert(`${username} login sucessful`)
  } else {
    alert (`${username} login failed`)
  }
}
