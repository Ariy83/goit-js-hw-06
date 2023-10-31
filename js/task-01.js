function task01() {
  const categoriesItems = document.querySelectorAll("ul#categories .item");
  const messageNumberItems = `Number of categories: ${categoriesItems.length}`;
  console.log(messageNumberItems);
  categoriesItems.forEach((element) => {
    const nameItem = element.querySelector(".item>h2").textContent;
    const amountLi = element.querySelectorAll("ul>li").length;
    console.log(`Category: ${nameItem}`);
    console.log(`Elements: ${amountLi}`);
  });
}
task01();
