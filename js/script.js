// When the user scrolls the page, execute myFunction
window.onscroll = function() {get_sticky()};

// Get the navbar
var navbar = document.querySelector("nav");
var h1 = document.querySelector("h1");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function get_sticky() {
  if (window.scrollY >= sticky + 5) {
    navbar.classList.add("sticky")
  }
  else {
    navbar.classList.remove("sticky");
  }
}