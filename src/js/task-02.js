const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
function task02() {
  let items = [];
  ingredients.forEach((element) => {
    const item = document.createElement("li");
    item.textContent = element;
    const addClassLi = item.classList.add("item");
    items.push(item);
  });
  const ulIngredients = document.querySelector("#ingredients");
  const result = ulIngredients.append(...items);
  return result;
}
task02();
