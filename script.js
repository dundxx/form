const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Введите корректный email';
    return;
  } else {
    emailError.textContent = '';
  }

  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Пароль должен быть не менее 6 символов';
    return;
  } else {
    passwordError.textContent = '';
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
