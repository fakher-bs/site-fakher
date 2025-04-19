document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.getElementById("burgerBtn");
  const menuMobile = document.getElementById("menuMobile");

  if (burgerBtn && menuMobile) {
    burgerBtn.addEventListener("click", () => {
      menuMobile.classList.toggle("hidden");
    });
  }
});
