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
    if (currentPage.includes (currentHref)) {
      //if so, add class 'active'
      navLinks[i].classList.add("header__main-nav-link--active");
    }
  };
});






//1st approach. Seems kinda hacky and might not work once the url is longer 
//and has info on it after the last backslash that was giving me trouble:

// //store nav links in array navLinks
// const navLinks = document.querySelectorAll(".header__main-nav-link");
// //store spans in array navSpans
// const navSpans = document.querySelectorAll(".header__link-text");
// const currentURL = document.URL;
// //newURL cuts off the '/' at the end of the url to make it able to match 
// //the href easier
// const newURL = currentURL.slice(0, currentURL.length - 1);

// //loop through URLs of each navLink and see if it contains currentURL
// for (let i = 0; i < navLinks.length; i++) {
// // check to see if URL matches current page URL
//   if (navLinks[i]["href"] === newURL) {
//     //if so, add class 'active'
//     navSpans[i].classList.add("header__link-text--active");
//   }
// }


// ******************

//2nd approach, using https://css-tricks.com/snippets/javascript/get-url-and-url-parts-in-javascript/ 
//as a guide: 

// //this splits the URL into an array, each item separated at the /'s
// let pathArray = window.location.pathname.split('/');
// //stores the 2nd index item, which gives us the current pagename like 'schedule' or 'songlist' etc, 
// //without extra info like 'http', 'localhost:3000', etc.
// let currentPage = pathArray[1];
// //array to store all the pagenames
// const linksList = [];

// //loop through the navLinks list
// for (let i = 0; i < navLinks.length; i++) {
// //store the href value as a string, without the slash at the end 
//   let newPage = navLinks[i]['href'].split('/');
// //push that string into linksList array. 
//   linksList.push(newPage[3]);
// //if that string equals current page, add class with the underline to the span.
//   if (linksList[i] === currentPage) {
//     navSpans[i].classList.add("header__link-text--active");
//   }
// }

