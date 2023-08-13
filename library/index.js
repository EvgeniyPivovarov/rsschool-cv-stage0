document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav_conrainer").classList.toggle(".open");
});
// document.querySelector(".burger").addEventListener("click", function () {
//   this.classList.toggle("active");
//   document.querySelector(".nav_conrainer").classList.toggle("open");
// });
// let burgerMenu = document.querySelector(".burger");
// let navConrainer = document.querySelector(".nav_conrainer");
// burgerMenu.addEventListener("click", function () {
//   burgerMenu.classList.toggle("active");
//   navConrainer.classList.toggle("active");
// });
// $(document).ready(function () {
//   $(".burger").click(function () {
//     $(".burger").toggleClass(".nav_conrainer");
//   });
// });
