const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    // remove active from all
    panels.forEach((p) => p.classList.remove("active"));

    // add active to clicked
    this.classList.add("active");
  });
});