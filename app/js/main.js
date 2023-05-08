$(function () {
  $('.review__inner').slick({
    dots: true,
    infinite: false,
    prevArrow: `<button type="button" class="review__arrow review__arrow--prev"><svg class="review__arrow-img">
      <use xlink:href="images/sprite.svg#icon-arrowleft"></use>
  </svg></button>`,
    nextArrow: `<button type="button" class="review__arrow review__arrow--next"><svg class="review__arrow-img">
    <use xlink:href="images/sprite.svg#icon-arrowright"></use>
</svg></button>`,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
        },
      },
    ],
  });
});

$(window).on('load resize', function () {
  if ($(window).width() < 768) {
    $('.restaurants__content:not(.slick-initialized)').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 10,
      slidesToShow: 1,
    });
  } else {
    $('.restaurants__content.slick-initialized').slick('unslick');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const burgerOpen = document.querySelector('.burger--open');
  const burgerClose = document.querySelector('.burger--close');
  const mobileMenu = document.querySelector('.menu--adaptive');
  const bodyLock = document.querySelector('body');

  burgerOpen.addEventListener('click', () => {
    mobileMenu.classList.add('menu--active');
    bodyLock.classList.add('lock');
  });
  burgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('menu--active');
    bodyLock.classList.remove('lock');
  });
  document.addEventListener('click', function (e) {
    if (e.target !== burgerOpen && e.target !== mobileMenu) {
      mobileMenu.classList.remove('menu--active');
      bodyLock.classList.remove('lock');
    }
  });
});

var mixer = mixitup('.popular__content');
