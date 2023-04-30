$(function () {
  $('.review__inner').slick({
    dots: true,
    prevArrow: `<button type="button" class="slick-prev"><svg class="slick-btn-img">
      <use xlink:href="images/sprite.svg#icon-arrowleft"></use>
  </svg></button>`,
    nextArrow: `<button type="button" class="slick-next"><svg class="slick-btn-img">
    <use xlink:href="images/sprite.svg#icon-arrowright"></use>
</svg></button>`,
  });
});

var mixer = mixitup('.popular__content');
