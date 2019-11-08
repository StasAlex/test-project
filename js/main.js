const menuToggle = document.querySelector('#menu-toggle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function (params) {
  menuToggle.classList.toggle('menu-icon-active');
  mobileNavContainer.classList.toggle('mobile-nav--active');
}