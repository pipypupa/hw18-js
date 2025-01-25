// Завдання 1
const categories = document.querySelectorAll(".item");
console.log(`У списку ${categories.length} категорії.`);

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("li").length;
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${itemsCount}`);
});

// Завдання 2
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
});

ingredientsList.append(...elements);

//   Завдання 3


