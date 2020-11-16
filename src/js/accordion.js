const faqs = document.querySelectorAll(".accordion__item-title");

for (let i = 0; i < faqs.length; i++) {
  faqs[i].addEventListener("click", function(){
    faqs[i].parentNode.classList.toggle("accordion__item--expanded");
  });  
}