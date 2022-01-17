// APP

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textArea: document.querySelector('.js-feedback-message'),
};

const LS_MESSAGE = 'messageInput';
function getFromLS() {
  const keysArray = Object.keys(localStorage);

  keysArray.forEach(formElementName => {
    if (formElementName) {
      refs.form.elements[formElementName].value = localStorage.getItem(formElementName);
    }
  });
}

getFromLS();

function saveToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormElementsInput);

function onFormElementsInput(evt) {
  const messageInput = evt.target.value;
  const key = evt.target.name;
  if (key !== 'pass') {
    saveToLocalStorage(key, messageInput);
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  const dataFromForm = {};

  formData.forEach((value, key) => {
    dataFromForm[key] = value;
  });

  evt.target.reset();
  localStorage.clear();
}
