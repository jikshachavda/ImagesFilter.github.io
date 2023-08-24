const filterButtons = document.querySelectorAll(".btn");
const filterableCards = document.querySelectorAll(".cards");

const updateimg = (e) => {
  filterableCards.forEach((card) => {
    if (
      card.dataset.name === e.target.dataset.filter ||
      e.target.dataset.filter === "all"
    ) {
      return card.classList.replace("hide", "show");
    }
    card.classList.add("hide");
  });
};

filterButtons.forEach((button) => button.addEventListener("click", updateimg));
