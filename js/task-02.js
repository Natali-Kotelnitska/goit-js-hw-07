// В HTML є пустий список ul#ingredients.
// В JS є масив рядків.
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, який для кожного елемента масиву ingredients 
// створить окремий li, після чого вставить всі li за одну операцію 
// в список ul.ingredients.
// Для створення DOM - вузлів використовуй document.createElement().

const elements = ingredients.map(ingredient => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.textContent = ingredient;

  return ingredientsItemEl;
});

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...elements);




