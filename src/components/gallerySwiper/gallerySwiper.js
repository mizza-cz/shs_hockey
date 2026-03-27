const gallerySwiper = document.querySelector(".gallerySwiper");
if (gallerySwiper) {
  new Swiper(".gallerySwiper", {
    spaceBetween: 4,
    speed: 1000,
    loop: true,
    slidesPerView: "auto",
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
