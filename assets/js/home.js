//change the nav bar background color when scrolled
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 10);
})

//mobile toggle for nav
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}