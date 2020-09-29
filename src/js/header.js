let headerButton = document.querySelector(".header__button");
let navList = document.querySelector(".header__main-nav-list");

//listens for click on nav button and toggles the nav list to be hidden or visible.
headerButton.addEventListener("click", function(){
  if (navList.classList.contains("header__main-nav-list--expanded")) {
    navList.classList.remove("header__main-nav-list--expanded");
    headerButton.classList.remove("header__button--opened");

  } else {
    navList.classList.add("header__main-nav-list--expanded");
    headerButton.classList.add("header__button--opened");
  }
});
