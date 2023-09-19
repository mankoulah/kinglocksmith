const navbar = document.querySelector('.inner-header');

window.addEventListener('scroll', function () {
  navbar.classList.toggle('navbar-scroll', window.scrollY > 0);
});


