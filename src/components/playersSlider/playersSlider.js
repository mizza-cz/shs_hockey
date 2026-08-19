const playersSlider = document.querySelector(".playersSlider__inner");

if (playersSlider) {
  new Swiper(playersSlider, {
    spaceBetween: 24,
    speed: 1000,

    slidesPerView: 1,

    navigation: {
      nextEl: ".playersSlider__btn.next",
      prevEl: ".playersSlider__btn.prev",
    },

    breakpoints: {
      541: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 4,
      },
    },
  });
}
