let faqItems = document.querySelectorAll(".accordion__item");

for (let i = 0; i < faqItems.length; i++) {
  faqItems[i].addEventListener("click", function(){
    faqItems[i].classList.toggle("accordion__item--expanded");
  });  
}

//I know event delegation would be a better way to do this but I need to work on it still:
// faqItem.addEventListener("click", function(event){
//   event.target.classList.toggle("accordion__item--expanded");
// });

