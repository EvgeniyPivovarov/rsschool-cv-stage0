 const burger = document?.querySelector('[data-burger]');
 const nav = document?.querySelector('[data-nav]');
 const navLi = document?.querySelectorAll('.nav_li');


  burger?.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  nav.classList.toggle('nav--visible');
 })

 navLi.forEach(el => {
  el.addEventListener('click', () => {
  burger.classList.remove('burger--active');
  nav.classList.remove('nav--visible');
  })
 })