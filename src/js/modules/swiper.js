import Swiper from "swiper/bundle";

//import 'swiper/css';

export const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
    // dynamicBullets: true,
    // renderBullet: (index, className) => {
    //   return `<span class ="${className}">${index+1}</span>`
    // },
    // type: 'fraction',
    // renderFraction: (currentClass, totalClass) => {
    //   return `Фото <span class ="${currentClass}"></span> из <span class ="${totalClass}"></span>`
    // },
    type: "progressbar",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  //scrollbar: {
  //  el: ".swiper-scrollbar",
  //  draggable: true,
  //},

  grabCursor: true,

  keyboard: {
    enaible: true,
    onlyInViewport: true,
  },

  mousewheel: {
    sensitivity: 1,
    // evetsTarget: ".swiper-img",
  },

  // автовысота
  autoHeight: true,

  // кол-во слайдов для показа
  // slidesPerView: 3,

  // отступ между слайдами
  spaceBetween: 30,

  // отключение если слайдов меньше чем нужно
  watchOverflow: true,

  // кол-во пролистываем слайдов
  slidesPerGroup: 1,

  // активный слайд по центу
  // centeredSlides: true,

  // стартовый слайд
  initialSlide: 0,

  // кол-во колонок
  // grid: {
  //   rows: 2,
  // },

  //  для slidesPerView: "auto"
  // loopedSlides: 3,

  // свободный режим
  // freeMode: true,

  // автопрокрутка
  // autoplay: {
  //   // пауза между прокруткой
  //   delay: 1000,
  //   // Закончить на последнем слайде
  //   stopOnLastSlide: true,
  //   // Отключить после ручного переключения
  //   disableOnInteraction: false,
  // },

  // скорость перелистования
  speed: 500,

  // эффекты

  effect: "slide",
  // effect: 'fade',
  // effect: 'flip',
  // flipEffect: {
  //   // Тень
  //   slideShadows: true,
  //   // Показ только активного слайда
  //   limitRotation: true
  // },
  // effect: 'cube',
  // cubeEffect: {
  //   //
  //   slideShadows: true,
  //   shadow: true,
  //   shadowOffset: 80,
  //   shadowScale: 0.8,
  // },
  // effect: 'coverflow',
  // coverflowEffect: {
  //   // Угол
  //   rotate: 30,
  //   // Наложение
  //   stretch: 30,
  //   //  Тень
  //   slideShadows: true,
  // },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
