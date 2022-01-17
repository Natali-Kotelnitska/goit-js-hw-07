\\ APP.JS

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textArea: document.querySelector('.js-feedback-message'),
};

function getFromLS() {
  const messageFromLS = localStorage.getItem('messageInput');
  if (messageFromLS) {
    refs.textArea.value = messageFromLS;
  }
}

getFromLS();

console.log(refs);

refs.textArea.addEventListener('input', onTextAreaInput);
refs.form.addEventListener('submit', onFormSubmit);

function onTextAreaInput(evt) {
  const messageInput = evt.target.value;
  // console.log(messageInput);
  localStorage.setItem('messageInput', messageInput);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const messageFromLS = localStorage.getItem('messageInput');
  if (messageFromLS) {
    localStorage.removeItem('messageInput');
    evt.target.reset();
  }
}

// localStorage.getItem('key');
// localStorage.setItem('key', 'value');
// localStorage.clear();
// localStorage.removeItem('key');

// const userName = 'Vova';

// localStorage.setItem('user', userName);

// const userFromLS = localStorage.getItem('user');

// if (userFromLS) {
//   localStorage.removeItem('user');
// }