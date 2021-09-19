// Напиши скрипт, який би при втраті фокуса на інпут,
//     перевіряв його вміст на правильну кількість символів.

// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,   якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.

const inputValidationEl = document.querySelector("#validation-input");

const inputLength = Number(inputValidationEl.dataset.length);
// console.log(typeof inputLength);

inputValidationEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === inputLength) {
        inputValidationEl.classList.add('valid')
        inputValidationEl.classList.remove('invalid')
    } else {
        inputValidationEl.classList.remove('valid')
        inputValidationEl.classList.add('invalid')
    }      
};
