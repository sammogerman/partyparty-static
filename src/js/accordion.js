const faqs = document.querySelectorAll(".accordion__item-title");
const accordionItems = document.querySelectorAll(".accordion__item");

for (let i = 0; i < faqs.length; i++) {
  faqs[i].addEventListener("click", function(){
    accordionItems[i].classList.toggle("accordion__item--expanded");
  });  
}

// WIP Version 2 for practice/funsies using Event delegation.
// const accordion = document.querySelector(".accordion");
// accordion.addEventListener("click", function(event){
//   event.currentTarget.classList.toggle("accordion__item--expanded");
// });

