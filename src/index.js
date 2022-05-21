import style from './style.css';

// DOM queries
const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

// function to display errors
const showError = () => {
  if (email.validity.valueMissing) {
    emailError.textContent = 'Please enter an e-mail address';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid e-mail address';
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minlength} characters long, 
    you've entered ${email.value.length} characters`;
  }
};

// listeners
// validates every time the user is typing
email.addEventListener('input', () => {
  if (email.validity.valid) {
    emailError.textContent = ''; // reset error if present
    emailError.className = 'error'; // reset error class
  } else {
    showError();
  }
});

// form - activates validation on user submit
form.addEventListener('submit', (event) => {
  if (!email.validity.valid) {
    showError();
  }
  event.preventDefault();
});
