// const res = require("express/lib/response");

async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    console.log(response.statusText);
    alert('User not logged in');
  }
}

function navLogin() {
  document.location.href = '/login'
}


document.querySelector('.Logout').addEventListener('click', logout);
document.querySelector('.Login').addEventListener('click', navLogin);
