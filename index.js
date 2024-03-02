const btnMovNav = document.querySelector('.btn-mobile-nav');
const headerNavOpen = document.querySelector('.header');
btnMovNav.addEventListener('click', function () {
  headerNavOpen.classList.toggle('nav-open');
});
