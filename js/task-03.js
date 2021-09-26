// Напиши скрипт для створення галереї зображень по масиву даних.
// В HTML є список ul#gallery.

// Використовуй масив об'єктів images для створення тегів img вкладених в li. 
// Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().

// Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// Додай мінімальне оформлення галереї флексбоксами або грід через   css-класи.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryEl = document.querySelector('#gallery');


const makeGalleryMarkup = ({url, alt})=> {
  return `
  <li>
  <img src= ${url} alt = ${alt}>
  </li>
  `;
}
const makeGallery = images.map(makeGalleryMarkup).join(" ");


galleryEl.insertAdjacentHTML('beforeend', makeGallery);
console.log(galleryEl)










