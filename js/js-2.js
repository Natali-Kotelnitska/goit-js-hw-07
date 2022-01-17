
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
  { name: 'Flu', href: 'https://en.wikipedia.org/wiki/Influenza' },
]

const rootRef = document.querySelector('#root')
const btnMenuRef = document.querySelector('.js-btnMenu')

let list = document.createElement('ul')
list.classList.add(...['menu', 'hide'])

function createLiItem(menuItem) {
  const li = createLi();
  const a = createAnchor(menuItem);
  li.append(a)
  return li
}

function createAnchor(menuItem) {
  let { name: textParam, href } = menuItem
  console.log(menuItem)
  const a = document.createElement('a')
  a.classList.add('menu__link')
  a.href = href
  a.target = '_blank'
  a.textContent = textParam

  return a;
}

function createLi() {
  const li = document.createElement('li')
  li.classList.add('menu__item')
  return li
}

const menu = deseases.map((menuItem) => createLiItem(menuItem))
list.append(...menu)

rootRef.append(list)

btnMenuRef.addEventListener('click', () => {
  list.classList.toggle('show')
  list.classList.toggle('hide')
})

