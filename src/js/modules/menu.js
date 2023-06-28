export const menu = () => {
  const burger = document.querySelector(".burger");

  const burgerText = document.querySelector(".burger-text");

  const headerMenu = document.querySelector(".header__content");

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger");
    burger.classList.toggle("closed");
    if (burgerText.innerHTML == "Открыть меню") {
      burgerText.innerHTML = "Закрыть меню";
    } else {
      burgerText.innerHTML = "Открыть меню";
    }
    headerMenu.classList.toggle("active");
  });

  const searchButton = document.querySelector(".search-button");
  const headerSearchWrapper = document.querySelector(".header-search-wrapper");
  searchButton.addEventListener("click", () => {
    headerSearchWrapper.classList.toggle("active");
    searchButton.classList.toggle("close");
  });
};
