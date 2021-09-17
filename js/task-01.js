// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
//     то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories,
//     найдет и выведет в консоль текст заголовка элемента(тега h2) 
//     и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4


const categoriEl = document.querySelector('#categories');
console.log(`В списке ${categoriEl.children.length} категории.`);

const itemTitleEl = document.querySelectorAll("h2");

console.log(`Категория: ${itemTitleEl[0].textContent}`);
console.log(`Количество элементов: ${itemTitleEl[0].nextElementSibling.children.length}`);


console.log(`Категория: ${itemTitleEl[1].textContent}`);
console.log(`Количество элементов: ${itemTitleEl[1].nextElementSibling.children.length}`)

console.log(`Категория: ${itemTitleEl[2].textContent}`);
console.log(`Количество элементов: ${itemTitleEl[2].nextElementSibling.children.length}`)

