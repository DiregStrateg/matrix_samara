'use sttrict';


class SliderCarousel {
  constructor({
    main,
    wrap,
    next,
    prev, 
    position = 0,
  }) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.options = {}
      position
  };
  init() {
    this.addMyClass();
    this.addStyle();
  }

  addMyClass() {
    this.main.classList.add('my-slider');
    this.wrap.classList.add('my-slider__wrap');
    for ( const item of this.slides) {
      item.classList.add('my-slider__item');
    }
  }

  addStyle() {
    const style = document.createElement('style');
    style.id = 'sliderCarousel-style';
    style.textContent = `
      .my-slider {
        overflow: hidden;
      }
      .my-slider__wrap {
        display: flex;
        transition: transform 0.5s;
        will-change: transform;
      }
      .my-slider__item {
        flex: 0 0 25%;
        margin: 0 auto;
      }
    `;

    document.head.appendChild(style);
  }
}