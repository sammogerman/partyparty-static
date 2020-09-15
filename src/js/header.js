let hamburger = document.querySelector(".header__button");
let navList = document.querySelector(".header__main-nav-list")

//listens for click on nav button and toggles the nav list to be hidden or visible.
hamburger.addEventListener("click", function(){
  if (navList.classList.contains("header__main-nav-list--expanded")) {
    navList.classList.remove("header__main-nav-list--expanded");
    hamburger.textContent="Open";
  } else {
    hamburger.textContent="Close";
    navList.classList.add("header__main-nav-list--expanded");
  }
});