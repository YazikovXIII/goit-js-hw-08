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

form.addEventListener('input', onInput);

function onInput(evt) {
  _.throttle(saveData, 2000)();
}
// Щось не так з тротл,прошу підказки.Будь ласка!
function saveData() {
  const emailValue = email.value;
  const messageValue = message.value;
  const feedback = { emailValue, messageValue };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}

form.addEventListener('submit', onSub);

function onSub(evt) {
  evt.preventDefault();

  //   saveData(); ?

  console.log('email :', email.value);
  console.log('message :', message.value);

  email.value = '';
  message.value = '';
}
