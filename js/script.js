// code to make the navbar sticky on scroll:
window.onscroll = function() {
  sticky()
};

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

function sticky() {
  if (window.scrollY >= sticky + 5) {
    navbar.classList.add("sticky")
  }
  else {
    navbar.classList.remove("sticky");
  }
}