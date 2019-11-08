const menuToggle = document.querySelector('#menu-toggle');
const mobileNavContainer = document.querySelector('#mobile-nav');
const body = document.querySelector('body');

// body.onclick = function () {
//   if (mobileNavContainer.classList.contains('mobile-nav--active')) {
//     console.log(mobileNavContainer.classList);
//     menuToggle.classList.toggle('menu-icon-active');
//     mobileNavContainer.classList.toggle('mobile-nav--active');
//   }
// }

menuToggle.onclick = function () {
  menuToggle.classList.toggle('menu-icon-active');
  mobileNavContainer.classList.toggle('mobile-nav--active');
}