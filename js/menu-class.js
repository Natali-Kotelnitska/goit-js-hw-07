class Menu {
  constructor(deseases) {
    this.rootRef = document.querySelector('#root');
      this.btnMenuRef = document.querySelector('.js-btnMenu');
      this.deseases = deseases;
      this.list = '';
  }
  createUl = () => {
    let ul = document.createElement('ul');
      ul.classList.add(...['menu', 'hide']);
      this.list = ul;
    // return ul;
    };
    
  createLiItem = menuItem => {
    const li = this.createLi();
    const a = this.createAnchor(menuItem);
    li.append(a);
    return li;
    };
    
  createAnchor = menuItem => {
    let { name: textParam, href } = menuItem;
    console.log(menuItem);
    const a = document.createElement('a');
    a.classList.add('menu__link');
    a.href = href;
    a.target = '_blank';
    a.textContent = textParam;

    return a;
    };

    createLi = () => {
  const li = document.createElement('li')
  li.classList.add('menu__item')
  return li
    }
    createMenu = () => {
        const menu = this.deseases.map((menuItem) => this.createLiItem(menuItem))
        this.createUl()
        this.list.append(...menu)
        this.rootRef.append(this.list);
    }

  addListeners = () => {
    this.btnMenuRef.addEventListener('click', () => {
        this.list.classList.toggle('show')
        this.list.classList.toggle('hide');
    });
  };
    init = () => {
      this.createMenu();
      this.addListeners();
      
  };
}

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

const mainMenu = new Menu(deseases);
mainMenu.init();
