$(function () {
  console.log('Hello Bootstrap5');
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2.7,
      spaceBetween: 30,
    }
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // }
});
