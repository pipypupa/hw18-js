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

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector("#gallery");

const galleryMarkup = images
  .map(
    ({ url, alt }) => `
    <li class="gallery-item">
      <img src="${url}" alt="${alt}">
    </li>
  `
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

// Завдання 4

let counterValue = 0;
const value = document.querySelector("#value");
const decrementButton = document.querySelector("#decrement");
const incrementButton = document.querySelector("#increment");
function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}
function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}
decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);
