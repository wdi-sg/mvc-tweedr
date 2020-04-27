// something i will get to

const register = document.getElementById('register');
const login = document.getElementById('login');

const newTweed = document.createElement('form');
newTweed.innerHTML = `<input type='submit' value='New Tweed'/>`;
newTweed.setAttribute('method', 'GET');
newTweed.setAttribute('action', '/tweeds/new');

const logout = document.createElement('form');
logout.innerHTML = `<input type='submit' value='Log Out'/>`;
logout.setAttribute('method', 'POST');
logout.setAttribute('action', '/users/logout');

if (loggedIn === 'true') {
  document.body.insertBefore(newTweed, register);
  document.body.removeChild(register);
  document.body.insertBefore(logout, login);
  document.body.removeChild(login);
}