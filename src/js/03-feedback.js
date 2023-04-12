import _ from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name = "email"]');
const message = document.querySelector('textarea[name = "message"]');

window.addEventListener('load', onLoad);

function onLoad() {
  const localData = localStorage.getItem('feedback-form-state');
  if (localData) {
    const { emailValue, messageValue } = JSON.parse(localData);
    if (!email.value) {
      email.value = emailValue;
    }
    if (!message.value) {
      message.value = messageValue;
    }
  }
}

form.addEventListener('input', _.throttle(saveData, 2000));

function saveData() {
  const emailValue = email.value;
  const messageValue = message.value;
  const feedback = { emailValue, messageValue };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}

form.addEventListener('submit', onSub);

function onSub(evt) {
  evt.preventDefault();

  const EMAIL = email.value;
  const MESSAGE = message.value;
  const feedback = { EMAIL, MESSAGE };
  console.log(feedback);

  email.value = '';
  message.value = '';

  localStorage.removeItem('feedback-form-state');
}
