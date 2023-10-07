const body = document.querySelector("body")
const menu = document.querySelector(".menu-list");
const openmenu = document.querySelector(".open-menu");
const closemenu = document.querySelector(".close-menu");
const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");



tablinks.forEach((tab, index) => {
    tab.addEventListener("click", () => {
     
      tablinks.forEach((tab) => {
        tab.classList.remove("active-link");
      });
      tab.classList.add("active-link");
  
      
      tabcontents.forEach((content) => {
        content.classList.remove("active-tab");
      });
      tabcontents[index].classList.add("active-tab");
  
    });
  });
  

















openmenu.addEventListener("click", () => {
   menu.classList.add("active-menu")
   openmenu.classList.add("hide")
   body.classList.add("disableScroll")
})

closemenu.addEventListener("click", () => {
   menu.classList.remove("active-menu")
   openmenu.classList.remove("hide")
   body.classList.remove("disableScroll")
})