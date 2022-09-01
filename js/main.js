window.addEventListener('DOMContentLoaded', () => {


  document.querySelector('.top_close_btn').addEventListener('click', function () {
    this.classList.toggle('on');
    document.querySelector('.TopBanner').classList.add('on');
  })

  const MAINSLIDE = new Swiper('.swiper', {
    loop: true,
    on: {
      init: function () {
        const current = document.querySelector('.swiper-slide-active');
        current.classList.add('on');

        document.querySelector('.main_slider_num').innerHTML = (this.realIndex + 1) + " / " + (this.slides.length - 2);
      }
    }
  });

  const totalSlide = document.querySelectorAll('.swiper-slide');
  const slideDots = document.querySelectorAll('.slide_dots li');

  MAINSLIDE.on('slideChangeTransitionEnd', function () {
    const current = document.querySelector('.swiper-slide-active');

    totalSlide.forEach(it => it.classList.remove('on'));
    current.classList.add('on');
    let count = this.realIndex;
    slideDots.forEach(it => it.classList.remove('on'));
    slideDots[count].classList.add('on');
    document.querySelector('.main_slider_num').innerHTML = (this.realIndex + 1) + " / " + (this.slides.length - 2);
  });

  document.querySelector('.MainVisual .next').addEventListener('click', () => {
    MAINSLIDE.slideNext();
  });

  document.querySelector('.MainVisual .prev').addEventListener('click', () => {
    MAINSLIDE.slidePrev();
  });
});