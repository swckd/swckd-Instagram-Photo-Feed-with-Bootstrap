const gridToggler = document.getElementById("gridToggler");
const gridList = document.getElementById("gridList");

let isGrid = false;

gridToggler.addEventListener("click", () => {
  let isGrid = true;

  gridToggler.setAttribute("class", "bi-grid-3x2-gap-fill");
  listToggler.setAttribute("class", "bi bi-list");

  toggler(isGrid);
});

const listToggler = document.getElementById("listToggler");

listToggler.addEventListener("click", () => {
  let isGrid = false;

  gridToggler.setAttribute("class", "bi-grid-3x2-gap");
  listToggler.setAttribute("class", "bi bi-view-list");

  toggler(isGrid);
});

function toggler(isGrid) {
  const cards = document.getElementsByClassName("card");

  if (isGrid) {
    gridList.classList.remove("row-cols-1");

    gridList.classList.add("row-cols-3");
  } else {
    gridList.classList.add("row-cols-1");

    gridList.classList.remove("row-cols-3");
  }

  for (let i = 0; i < cards.length; i++) {
    if (isGrid) {
      cards[i].classList.remove("custom-size-500");
    } else {
      cards[i].classList.add("custom-size-500");
    }

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

const biHearts = document.querySelectorAll(".bi-heart");

biHearts.forEach((element) => {
  element.addEventListener("click", function () {
    element.classList.toggle("bi-heart");
    element.classList.toggle("bi-heart-fill");
  });
});

const biBookmarks = document.querySelectorAll(".bi-bookmark");

biBookmarks.forEach((element) => {
  element.addEventListener("click", function () {
    element.classList.toggle("bi-bookmark");
    element.classList.toggle("bi-bookmark-fill");
  });
});
