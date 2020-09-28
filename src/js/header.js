let headerButton = document.querySelector(".header__button");
let hamburger = document.querySelector(".header__button-icon--open");
let closeIcon = document.querySelector(".header__button-icon--close");
let navList = document.querySelector(".header__main-nav-list");

//listens for click on nav button and toggles the nav list to be hidden or visible.
headerButton.addEventListener("click", function(){
  if (navList.classList.contains("header__main-nav-list--expanded")) {
    console.log("clicked");
    navList.classList.remove("header__main-nav-list--expanded");
    hamburger.style.display = 'block';
    closeIcon.style.display = 'none';

  } else {
    console.log("a click");
    navList.classList.add("header__main-nav-list--expanded");
    hamburger.style.display = 'none';
    closeIcon.style.display = 'block';
  }
});
