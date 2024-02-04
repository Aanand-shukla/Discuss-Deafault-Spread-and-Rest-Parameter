const parent = document.querySelector(".parent");
const children = document.querySelector(".children");
const grandChildren = document.querySelector(".grandChildren");

parent.addEventListener("click", (e) => {
  console.log("click on parent");
});
children.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click on children");
});
grandChildren.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("click on grandchildren");
  },
  { capture: true, once: true }
);
