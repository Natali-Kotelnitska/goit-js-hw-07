// let deseases = ['Plague', 'Antrathx', 'Ebola', 'SARS-CoV-2', 'Flu']

let deseases = [
  { name: 'Plague', href: 'https://en.wikipedia.org/wiki/Plague_(disease)' },
  {
    name: 'Anthrax',
    href: 'https://en.wikipedia.org/wiki/Anthrax_(disambiguation)',
  },
  { name: 'Ebola', href: 'https://en.wikipedia.org/wiki/Ebola' },
  {
    name: 'SARS-CoV-2',
    href:
      'https://en.wikipedia.org/wiki/Severe_acute_respiratory_syndrome_coronavirus_2',
  },
<<<<<<< Updated upstream
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




=======
  { name: 'Flu', href: 'https://en.wikipedia.org/wiki/Influenza' },
]
>>>>>>> Stashed changes

const rootRef = document.querySelector('#root')
const btnMenuRef = document.querySelector('.js-btnMenu')

let list = document.createElement('ul')
list.classList.add(...['menu', 'hide'])

function createLi(hrefParam, textParam) {
  const li = document.createElement('li')
  const a = document.createElement('a')

  li.classList.add('menu__item')
  a.classList.add('menu__link')
  a.setAttribute('href', hrefParam)
  a.setAttribute('target', '_blank')
  a.textContent = textParam
  li.append(a)

  return li
}

// list.append(createLi('https://en.wikipedia.org/wiki/Ebola', 'Ebola'))

// deseases.forEach((menuItem, idx) => {
//   list.append(createLi(idx, menuItem))
// })

const menu = deseases.map((menuItem, idx) =>
  createLi(menuItem.href, menuItem.name),
)
list.append(...menu)

rootRef.append(list)

btnMenuRef.addEventListener('click', () => {
  list.classList.toggle('show')
  list.classList.toggle('hide')
})

// btnMenuRef.addEventListener('click', () => {
//   if (list.classList.contains('hide')) {
//     list.classList.remove('hide')
//     list.classList.add('show')
//   } else {
//     list.classList.remove('show')
//     list.classList.add('hide')
//   }
// })