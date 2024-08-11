const form = document.querySelector('form');
const loginButton = document.querySelector('.button');

form.addEventListener('submit', handleFormSubmit);
loginButton.addEventListener('click', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const emailInput = document.querySelector('#email-input');
  const passwordInput = document.querySelector('#password-input');

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === 'user@user.com' && password === 'user') {
    window.location.replace('jobs.html');
  } else {
    alert('Invalid email or password');
  }
}