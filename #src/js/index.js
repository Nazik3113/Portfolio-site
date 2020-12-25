import gsap from 'gsap';
import webp from './modules/webp';

window.addEventListener('DOMContentLoaded', () => {
  webp();

  const tl1 = gsap.timeline({ defaults: { ease: 'power1.out' } });

  tl1.to('.menu', { y: '0%', borderRadius: '0px', duration: 0.2 });
  tl1.fromTo('.menu__title', { y: '-50%', opacity: 0 }, {
    y: '0%', opacity: 1, duration: 0.5, delay: 0.2,
  });
  tl1.fromTo('.menu__form-input', { y: '-50%', opacity: 0 }, {
    y: '0%', opacity: 1, duration: 0.5,
  }, '-=0.4');
  tl1.fromTo('.menu__form-submit', { y: '-50%', opacity: 0 }, {
    y: '0%', opacity: 1, duration: 0.5,
  }, '-=0.5');
  tl1.fromTo('.menu__text', { y: '-50%', opacity: 0 }, {
    y: '0%', opacity: 1, duration: 0.5,
  }, '-=0.4');
  tl1.fromTo('.menu__link', { y: '-10%', opacity: 0 }, {
    y: '0%', opacity: 1, duration: 0.3, stagger: 0.1,
  }, '-=0.5');
  tl1.reverse();

  function headerMenu(btnClass, btnActiveClass) {
    const btn = document.querySelector(btnClass);

    btn.addEventListener('click', () => {
      btn.classList.toggle(btnActiveClass);
      tl1.reversed(!tl1.reversed());
    });
  }
  headerMenu('.header__menu', 'header__menu--active');

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
    top: '50vh', left: '50vw', x: '-50%', y: '-50%', width: '225px', height: '220px',
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
  tl.to('.animBg', { opacity: 0, duration: 0.5 });
  tl.to('.animBg', { y: '-100%' }, '-=0.3');
});
