const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("dropdown--expanded");
  })
);
