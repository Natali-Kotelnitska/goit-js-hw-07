// Лічильник складається зі спана і кнопок, які повинні збільшувати
//  і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

let counterValue = 0;

const incrementBtnEl = document.querySelector(
  '#counter button[data-action="increment"]',
)
const decrementBtnEl = document.querySelector(
  '#counter button[data-action="decrement"]',
)

function setCounterValue() {
  document.getElementById('value').textContent = counterValue
}

function increment() {
  counterValue += 1
  setCounterValue()
}

function decrement() {
  counterValue -= 1
  setCounterValue()
}

incrementBtnEl.addEventListener('click', increment)
decrementBtnEl.addEventListener('click', decrement)

