const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
    console.log("Page loaded, removing preloader.");
    preloader.classList.add("remove");
});

const addEventOnElements = function (elements, eventType, callback) {
    for(let i = 0, len = elements.length; i<len; i++){
        elements[i].addEventListener(eventType, callback);
    }
}

// navabar toggle

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
} 

addEventOnElements(navTogglers, "click", toggleNav);

//header

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
});
  
