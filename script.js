const gridToggler = document.getElementById("gridToggler");
const gridList = document.getElementById("gridList");
let isGrid = false;
console.log(isGrid);

gridToggler.addEventListener("click", () => {
  let isGrid = true;

  toggler(isGrid);
});

const listToggler = document.getElementById("listToggler");

listToggler.addEventListener("click", () => {
  let isGrid = false;

  toggler(isGrid);
});

function toggler(isGrid) {
  console.log(isGrid);

  const cards = document.getElementsByClassName("card");

  //   gridList.classList.remove("row-cols-xs-1");

  //   gridList.classList.add("row-cols-xs-3");

  for (let i = 0; i < cards.length; i++) {
    const children = cards[i].querySelectorAll("*");

    for (let e = 0; e < children.length; e++) {
      if (children[e].tagName.toLowerCase() === "img") {
      } else {
        if (isGrid) {
          children[e].classList.add("d-none");
        } else {
          children[e].classList.remove("d-none");
        }
      }
    }
  }
}
