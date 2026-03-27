const playersSlider = document.querySelector(".playersSlider");
if (playersSlider) {
  new Swiper(".playersSlider", {
    spaceBetween: 24,
    speed: 1000,

    slidesPerView: "auto",
    navigation: {
      nextEl: ".playersSlider__btn.next",
      prevEl: ".playersSlider__btn.prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: "auto",
      },
    },
  });
}
