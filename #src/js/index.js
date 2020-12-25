import gsap from 'gsap';
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
  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
  tl.fromTo('.header__logo', {
    top: '50vh', left: '50vw', x: '-100%', y: '-50%', width: '225px', height: '220px',
  }, {
    top: '50vh', left: '50vw', x: '-50%', y: '-50%', width: '225px', height: '220px',
  });
  tl.to('.header__logo-letterN', { marginLeft: '42px' }, '-=1');
  tl.to('.header__logo-letterY', { marginLeft: '-110px' }, '-=1');
  tl.fromTo('.header__logo-letter', { y: '100%', opacity: 0, fontSize: '130px' }, {
    y: '0%', opacity: 1, fontSize: '130px', duration: 1,
  });
  tl.to('.header__logo', {
    top: '20px', left: '4rem', x: '0%', y: '0%', width: '50px', height: '44px', duration: 1.3,
  });
  tl.fromTo('.header__logo-letter', { fontSize: '130px' }, {
    fontSize: '26px', duration: 1.3,
  }, '-=1.3');
  tl.to('.header__logo-letterN', { margin: '0', duration: 1.3 }, '-=1.3');
  tl.to('.header__logo-letterY', { marginLeft: '-22px', duration: 1.3 }, '-=1.3');
  tl.to('.animBg', { opacity: 0, duration: 1 });
  tl.to('.animBg', { y: '-100%' });
});
