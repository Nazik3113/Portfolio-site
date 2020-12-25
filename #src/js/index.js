import webp from './modules/webp';

window.addEventListener('DOMContentLoaded', () => {
  webp();

  function headerMenu(btnClass, menuClass, btnActiveClass, menuActiveClass) {
    const btn = document.querySelector(btnClass);
    const menu = document.querySelector(menuClass);

    btn.addEventListener('click', () => {
      btn.classList.toggle(btnActiveClass);
      menu.classList.toggle(menuActiveClass);
    });
  }
  headerMenu('.header__menu', '.menu', 'header__menu--active', 'menu--active');

  const header = document.querySelector('.header');
  const mainPage = document.querySelector('.main__page');
  const headerHide = document.querySelector('.header__hide');
  window.addEventListener('scroll', () => {
    const scrollPoint = header.offsetHeight + mainPage.offsetHeight;
    if (window.scrollY > scrollPoint - 50) {
      headerHide.classList.add('header__hide--visible');
    } else {
      headerHide.classList.remove('header__hide--visible');
    }
  });
});
