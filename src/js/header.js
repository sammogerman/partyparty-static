//This outer code will ensure the code doesn't execute until all of the elements have been loaded on the page.
document.addEventListener("DOMContentLoaded", function() {
  
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

  const navLinks = document.querySelectorAll(".header__main-nav-link");
  const currentPage = window.location.pathname;

  // loop through URLs of each navLink and see if it contains currentURL
  for (let i = 0; i < navLinks.length; i++) {
    let currentHref = navLinks[i].getAttribute('href');
  // check to see if URL matches current page URL
    if (currentPage.includes(currentHref)) {
      //if so, add class 'active'
      navLinks[i].classList.add("header__main-nav-link--active");
    }
  };
});