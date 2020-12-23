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
  headerMenu('.header__menu', '.menu', 'header__menu--n', 'menu--active');
});
