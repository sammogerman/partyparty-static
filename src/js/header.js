let hamburger = document.querySelector(".header__button");
let navList = document.querySelector(".header__main-nav-list")

//listens for click on nav button and toggles the nav list to be hidden or visible.
hamburger.addEventListener("click", function(){
  if (navList.classList.contains("header__main-nav-list--expanded")) {
    navList.classList.remove("header__main-nav-list--expanded");
    hamburger.innerHTML='<img src="/assets/icons/btn-hamburger.svg" alt="Open">';
  } else {
    hamburger.innerHTML='<img src="/assets/icons/btn-close.svg" alt="Close">';
    navList.classList.add("header__main-nav-list--expanded");
  }
});