let hamburger = document.querySelector(".header__button");
let navList = document.querySelector(".header__main-nav-list")

//listens for click on nav button and toggles the nav list to be hidden or visible.
//TODO will also toggle large or small logo
hamburger.addEventListener("click", function(){
    if (hamburger.classList.contains(".header__button-toggle")) {
        hamburger.classList.toggle(".header__button-toggle");
        navList.classList.add("header__main-nav-list--hidden");
        hamburger.textContent="Close";
    } else {
        hamburger.classList.toggle(".header__button-toggle");
        hamburger.textContent="Open";
        navList.classList.remove("header__main-nav-list--hidden");
    }
});