const num = document.querySelector("#categories");
const foundLi = document.querySelectorAll(".item");
const foundLiLength = foundLi.length;
const resultCategories = "Number of categories: " + foundLiLength;
console.log(resultCategories);
foundLi.forEach((li) => {
  console.log("Category: " + li.firstElementChild.textContent);
  console.log("Elements: " + li.lastElementChild.children.length);
  const list = Array.from(li.lastElementChild.children);
  list.forEach((item) => {
    item.classList.add("list-style");
  });
});
