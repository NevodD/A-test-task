import Swiper from "swiper/bundle";

export const swiperTech = new Swiper(".mySwiper", {
    //loop: true,
    grabCursor: true,
    direction: "horizontal",

    spaceBetween: 10,
    //touchRatio: 1,
    //touchAngle: 45,
    //slidesPerView: 4,
    slidesPerGroup: 4,
    //centeredSlides: true,
    //initialSlide: 1,
    //slideToClickedSlide: true,
    freeMode: true,
    //watchSlidesProgress: true,
    //nested: true,
    //watchOverflow: true,
    //pagination: {
    //  el: ".technologies__slide",
    //  clickable: true,
    //  dynamicBullets: true,
    //  // renderBullet: (index, className) => {
    //  //   return `<span class ="${className}">${index+1}</span>`
    //  // },
    //  // type: 'fraction',
    //  // renderFraction: (currentClass, totalClass) => {
    //  //   return `Фото <span class ="${currentClass}"></span> из <span class ="${totalClass}"></span>`
    //  // },
    //  //type: "progressbar",
    //},
      breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1500:{
      slidesPerView: 4,
    }
  },
  });
export const swiperTech2 = new Swiper(".mySwiper2", {
    //loop: true,
    direction: "horizontal",
  
    grabCursor: true,
    slidesPerView: 1,
    //spaceBetween: 10,
    thumbs: {
      swiper: swiperTech,
    },
    //nested: true,
  });