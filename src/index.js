import style from './style.css';

// DOM queries
const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');
const country = document.getElementById('country');
const countryError = document.querySelector('#country + span.error');
const zip = document.getElementById('zip');
const zipError = document.querySelector('#zip + span.error');
const pwd = document.getElementById('pwd');
const pwdError = document.querySelector('#pwd + span.error');
const repeatPwd = document.getElementById('repeatpwd');
const repeatPwdError = document.querySelector('#repeatpwd + span.error');

// tweaked to email errors
const showMailError = () => {
  if (email.validity.valueMissing) {
    emailError.textContent = 'Please enter an e-mail address';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid e-mail address';
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minlength} characters long, 
    you've entered ${email.value.length} characters`;
  }
  emailError.className = 'error active';
};

// tweaked to country errors
const showCountryError = () => {
  if (country.validity.valueMissing) {
    countryError.textContent = 'Please enter a country name';
  } else if (country.validity.patternMismatch) {
    countryError.textContent = 'Please enter a valid country name';
  } else if (country.validity.tooShort) {
    countryError.textContent = `Country should be at least ${country.minlength} characters long, 
    you've entered ${country.value.length} characters`;
  }
  countryError.className = 'error active';
};

// tweaked to zip errors
const showZipError = () => {
  if (zip.validity.valueMissing) {
    zipError.textContent = 'Please enter a ZIP Code';
  } else if (zip.validity.patternMismatch) {
    zipError.textContent = 'Please enter a valid ZIP code';
  } else if (zip.validity.tooShort) {
    zipError.textContent = `ZIP code should be at least ${zip.minlength} characters long, 
    you've entered ${zip.value.length} characters`;
  }
  zipError.className = 'error active';
};

// tweaked to pwd errors
const showPwdError = () => {
  if (pwd.validity.valueMissing) {
    pwdError.textContent = 'Please enter a password';
  } else if (pwd.validity.patternMismatch) {
    pwdError.textContent =
      'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters';
  } else if (pwd.validity.tooShort) {
    pwdError.textContent = `pwd code should be at least ${pwd.minlength} characters long, 
    you've entered ${pwd.value.length} characters`;
  }
  pwdError.className = 'error active';
};

// tweaked to repeatpwd errors
const showRepeatPwdError = () => {
  if (repeatPwd.validity.valueMissing) {
    repeatPwdError.textContent = 'Please confirm your password';
  } else if (repeatPwd !== pwd) {
    repeatPwdError.textContent = 'Passwords do not match!';
  }
  repeatPwdError.className = 'error active';
};

// listeners
// validates every time the user is typing

// email
email.addEventListener('input', () => {
  if (email.validity.valid) {
    emailError.textContent = ''; // reset error if present
    emailError.className = 'error'; // reset error class
  } else {
    showMailError();
  }
});

// country
country.addEventListener('input', () => {
  if (country.validity.valid) {
    countryError.textContent = '';
    countryError.className = 'error';
  } else {
    showCountryError();
  }
});

// zip
zip.addEventListener('input', () => {
  if (zip.validity.valid) {
    zipError.textContent = '';
    zipError.className = 'error';
  } else {
    showZipError();
  }
});

// password
pwd.addEventListener('input', () => {
  if (pwd.validity.valid) {
    pwdError.textContent = '';
    pwdError.className = 'error';
  } else {
    showPwdError();
  }
});

// repeat password
repeatPwd.addEventListener('input', () => {
  if (repeatPwd !== pwd) {
    showRepeatPwdError();
  } else {
    repeatPwdError.textContent = '';
    repeatPwdError.className = 'error';
  }
});

// form - activates validation on user submit
/* form.addEventListener('submit', (event) => {
  if (!email.validity.valid) {
    showError();
  }
  event.preventDefault();
});
 */
